let api = {
  deals() {
    var url = `http://192.168.1.9:8000/deals`;
    return fetch(url).then((res) => res.json());
  },

  search(query) {
    query = query.toLowerCase().trim();
    var url = `http://192.168.1.9:8000/search/${query}`;
    return fetch(url).then((res) => res.json());
  },

  compare(query, cid) {
    query = query.toLowerCase().trim();
    var url = `http://192.168.1.9:8000/compare/${query}/${cid}`;
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;
