var storage = {}
var shell = new ActiveXObject('WScript.Shell')
var storageFile = shell.ExpandEnvironmentStrings('%USERPROFILE%') + '\\.hta-localstorage'
var fso = new ActiveXObject('Scripting.FileSystemObject')
if (fso.FileExists(storageFile)) {
  var fp = fso.OpenTextFile(storageFile, 1)
  var json = fp.ReadAll()
  try {
    storage = JSON.parse(json)
  }
  catch (e) {
    // Tampered with? Ignore invalid JSON
  }
  finally {
    fp.Close()
  }
}

function save() {
  var fp = fso.OpenTextFile(storageFile, 2, true)
  fp.Write(JSON.stringify(storage))
  fp.Close()
}

module.exports = {
  getItem: function(key) {
    return storage[key] || undefined
  },
  setItem: function(key, value) {
    storage[key] = String(value)
    save()
  },
  removeItem: function(key) {
    delete storage[key]
    save()
  },
  clear: function() {
    storage = {}
    save()
  }
}
