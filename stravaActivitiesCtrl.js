angular.module('widget')
    .controller('stravaActivitiesCtrl', ['$scope', '$collection', '$timeout', function($scope, $collection, $timeout) {
        var timeout = 2500;
        $scope.$watch('widget.data', resetData);
        $scope.$watch('currentIndex', switchActivity);

        function resetData(data) {
            $scope.activities = data.activities;
            $scope.currentIndex = 0;
        }

        function switchActivity() {
            if ($scope.activity) {
                $scope.activity.visible = false;
            }
            if ($scope.activities[$scope.currentIndex]) {
                $timeout(function() {
                    $scope.activity = $scope.activities[$scope.currentIndex];
                    $scope.activity.visible = true;
                }, 350);
            }
        }

        function slider() {
            $scope.timer = $timeout(function() {
                $scope.currentIndex < $scope.activities.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
                $scope.timer = $timeout(slider, timeout);
            }, timeout);
        }

        slider();

        $scope.$on('$destroy', function() {
            $timeout.cancel($scope.timer);
        });
    }]);