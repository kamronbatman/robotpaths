function robotPaths(n) {
  var map = {};
  var s = 0;
  function search(idx) {
    if (idx >= 0 && idx < n*n && !map[idx]) {
      if (idx == n*n-1) { s++; }
      else {
        map[idx] = 1;
        idx%n>0 && search(idx-1); //Recurse left
        search(idx+n); //Recurse 1 row below
        n-1>idx%n && search(idx+1); //Recurse right
        search(idx-n); //Recurse 1 row above
        map[idx] = 0;
      }
    }
  }
	
  search(0);
  return s;
}
