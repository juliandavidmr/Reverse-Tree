/********************************
 *         Reverse tree
 ********************************/
const r_dirname = /(\/.*)/; // Capture dirnames 
const r_file_folder = /([-_. ]*)([\w*\d*.]+)/i; // Capture simbols and name file. Ej: -----folder

const FILE = 1;
const FOLDER = 2;

function isDirname(input) {
  return r_dirname.test(input);
}

/**
 * Separates a string of text into special 
 * characters and filename or folder.
 * @param {string} input 
 */
function separate(input) {
  if (r_file_folder.test(input)) {
    var groups = r_file_folder.exec(input);
    return [groups[1], groups[2]];
    //console.log("Groups:", groups);
  }
}

/**
 * Evaluates whether the current item is a folder.
 * @param {[]} array 
 * @param {number} index 
 */
function isFolder(array, index) {
  if (array[index + 1] !== undefined) {
    return array[index + 1].spaces > array[index].spaces;
  }
  return false;
}


/**
 * @param {string} input 
 */
function vector(input) {
  var vector = input.split('\n');
  var out_vector = [];
  vector.map((line, index) => {
    if (line.trim().length > 0) {
      let sep = separate(line);
      out_vector.push({
        spaces: sep[0].length,
        name: sep[1]
      });
    }
  })
  for (var i = 0; i < out_vector.length; i++) {
    if (isFolder(out_vector, i)) {
      out_vector[i].type = FOLDER;
    } else {
      out_vector[i].type = FILE;
    }
  }
  return out_vector;
}

function getfiles(array) {
  var i = 0,
    files = [];

  while (array[i] !== undefined && array[i].type != FOLDER) {
    files.push(array[i].name);
    ++i;
  }
  return {
    files: files,
    breaks: i
  };
}

/**
 * 
 * @param {[]} vec 
 */
function tree(vec) {
  var object = {};
  for (var i = 0; i < vec.length; i++) {
    var element = vec[i];
    if (element.type === FOLDER) {
      var res_files = getfiles(vec.slice(++i, vec.length));
      object[element.name] = res_files.files;
      i = i + res_files.breaks - 1;
    } else {
      object[element.name] = element.name;
    }
  }
  return object;
}


function lib(input, option) {
  if (isDirname(input)) {

  } else {
    var vec = vector(input);
    return tree(vec);
  }
}

module.exports = lib;