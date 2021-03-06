(function() {
    
	angular.module('personServices', []).service("personServices", personServices);   

    function personServices($http, $q, $location){
        return ({
			load : _load,
			loadBy : _loadBy,
			remove : _remove,
			save : _save
		});


  function _save (entity) {

var request = $http({
				method : "POST",
				url : 'http://localhost:8081/CRUD/rest/pessoa',
				data : entity,
				headers : {
					'Content-Type' : 'application/json'
				}
			});
			
			return (request.then(handleSuccess, handleError));
			
  }



  function _load () {

var request = $http({
				method : "GET",
				url : 'http://localhost:8081/CRUD/rest/pessoa',
				headers : {
					'Content-Type' : 'application/json'
				}
			});
			
			return (request.then(handleSuccess, handleError));
			
  }



  function _remove (entity) {

var request = $http({
				method : "DELETE",
				url : 'http://localhost:8081/CRUD/rest/pessoa',
				data : entity,
				headers : {
					'Content-Type' : 'application/json'
				}
			});
			
			return (request.then(handleSuccess, handleError));
			
  }

  function _loadBy (name) {

var request = $http({
				method : "GET",
				url : 'http://localhost:8081/CRUD/rest/pessoa/filter/'+name,
				headers : {
					'Content-Type' : 'application/json'
				}
			});
			
			return (request.then(handleSuccess, handleError));
			
  }
	

		function handleError(response) {
			return ($q.reject(response));
		}

		function handleSuccess(response) {
		return (response.data);
		}
    };
    
})();
