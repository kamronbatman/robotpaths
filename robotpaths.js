function robotPaths(n) {
	var map = {};
	var s = 0;
	function search(idx) {
		if (idx >= 0 && idx < n*n && !map[idx]) {
			if (idx == n*n-1) { s++; }
			else {
				map[idx] = 1;
				search(idx%n>0?idx-1:-1); //Recurse left
				search(idx+n); //Recurse 1 row below
				search(n-1>idx%n?idx+1:-1); //Recurse right
				search(idx-n); //Recurse 1 row above
				map[idx] = 0;
			}
		}
	}
	
	search(0);
	return s;
}
