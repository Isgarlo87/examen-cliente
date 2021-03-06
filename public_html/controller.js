var miModulo = angular.module("angular1", []);
miModulo.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);
miModulo.controller('MiControlador', ['$scope', '$http',
    function ($scope, $http) {
        $scope.mostrarPacientes = false;
        
        $scope.num;
        $scope.result;
        
        $scope.disabled = true;
        $scope.required = true;

        $scope.rellenar = function () {
            if ($scope.cantidad > 0) {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/Ismael-servidor/json?ob=paciente&op=rellenar&num=' + $scope.num
                }).then(function successCallback(response) {
                    if (response.data.status == 200) {
                        if (response.data.json == null) {
                        } else {
                            $scope.paciente = response.data.json;
                            $scope.boton1 = {
                                "visibility": "visible",
                                "display": "inline"
                            }
                        }
                    } else {
                        $scope.error = "Error en la recepción de datos";
                    }
                }, function errorCallback(response) {
                    $scope.error = "Error en la recepción de datos";
                });
            }
        }
        
        $scope.mostrar = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:8081/Ismael-servidor/json?ob=paciente&op=dump'
            }).then(function success(response) {
                if (response.data.status == 200) {
                    if (response.data.json.length == 0) {
                    } else {
                        $scope.arrPacientes = response.data.json;
                        $scope.ordename = function (x) {
                            $scope.ordenameje = x;
                        }
                    }
                } else {
                    $scope.error = "Error en la recepción de datos";
                }
            }, function error(response) {
                $scope.error = "Error en la recepción de datos";
            });

        }
        
        $scope.contar = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:8081/Ismael-servidor/json?ob=paciente&op=cuenta'
            }).then(function success(response) {
                if (response.data.status == 200) {
                    if (response.data.json == null) {
                    } else {
                        
                        $scope.paciente = response.data.json;
                        $scope.rpp = response.data.json;
                        $scope.boton1 = {
                            "visibility": "visible",
                            "display": "inline"
                        }
                    }
                } else {
                    $scope.error = "Error en la recepción de datos";
                }
            }, function error(response) {
                $scope.error = "Error en la recepción de datos";
            });

        }
        $scope.vaciar = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:8081/Ismael-servidor/json?ob=paciente&op=vacia'
            }).then(function success(response) {
                if (response.data.status == 200) {
                    if (response.data.json == null) {
                    } else {
                        $scope.paciente = response.data.json;
                        $scope.boton1 = {
                            "visibility": "visible",
                            "display": "inline"
                        }
                    }
                } else {
                    $scope.error = "Error en la recepción de datos";
                }
            }, function error(response) {
                $scope.error = "Error en la recepción de datos";
            });
        }
        
        $scope.comprobar = function () {
            if ($scope.num <= 5000 && $scope.cantidad >= 1) {
                $scope.disabled = false;
            } else {
                $scope.disabled = true;
            }
            function error(response) {
                $scope.error = "Error en la recepción de datos";
            }
        }
        
    }])