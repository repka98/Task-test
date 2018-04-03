var app = angular.module('test', ['ngStorage']);

// this represents the state of the dialog: a visible flag and the person being edited
var EditPersonDialogModel = function () {
  this.visible = false;
};
EditPersonDialogModel.prototype.open = function(person) {
  this.person = person;
  this.visible = true;
};
EditPersonDialogModel.prototype.close = function() {
  this.visible = false;
};

app.controller('ctrl', ['$scope', '$localStorage', function ($scope, $localStorage) {
  $scope.editDialog = new EditPersonDialogModel();
  
  $scope.persons = [
  {
    "code": "1",
    "name": "Борисюк Самсон Андриянович",
    "telephone": "4000",
    "position": "Программист"
  },
  {
    "code": "2",
    "name": "Ярусова Бронислава Варфоломеевна",
    "telephone": "975593",
    "position": "Программист"
  },
  {
    "code": "3",
    "name": "Блатов Григорий Панкратиевич",
    "telephone": "9121286",
    "position": "Программист"
  },
  {
    "code": "4",
    "name": "Кирьянова Дарья Виталиевна",
    "telephone": "6754",
    "position": "Программист"
  },
  {
    "code": "5",
    "name": "Блатов Григорий Панкратиевич",
    "telephone": "3254",
    "position": "Программист"
  },
  {
    "code": "6",
    "name": "Таттар Диана Арсентиевна",
    "telephone": "986952",
    "position": "Программист"
  },
  {
    "code": "7",
    "name": "Пичушкин Назар Анатолиевич",
    "telephone": "968000",
    "position": "Программист"
  },
  {
    "code": "8",
    "name": "Ожогина Вера Геннадиевна",
    "telephone": "3068161",
    "position": "Программист"
  },
  {
    "code": "9",
    "name": "Якин Карп Куприянович",
    "telephone": "",
    "position": "Программист"
  },
  {
    "code": "10",
    "name": "Ведерникова Валентина Остаповна",
    "telephone": "41343201",
    "position": "Программист"
  },
  {
    "code": "11",
    "name": "Прудников Павел Левович",
    "telephone": "7881",
    "position": "Программист"
  },
  {
    "code": "12",
    "name": "Малафеева Галина Руслановна",
    "telephone": "205000",
    "position": "Программист"
  },
  {
    "code": "13",
    "name": "Корнилов Аскольд Михеевич",
    "telephone": "1515754",
    "position": "Программист"
  },
  {
    "code": "14",
    "name": "Ахтемирова Таисия Михеевна",
    "telephone": "1566",
    "position": "Программист"
  },
  {
    "code": "15",
    "name": "Кузанов Тимур Серафимович",
    "telephone": "6711",
    "position": "Программист"
  },
  {
    "code": "16",
    "name": "Осенныха Клара Афанасиевна",
    "telephone": "303512",
    "position": "Программист"
  },
  {
    "code": "17",
    "name": "Каравашкин Емельян Макарович",
    "telephone": "590000",
    "position": "Программист"
  },
  {
    "code": "18",
    "name": "Яшкова Марта Денисовна",
    "telephone": "85653",
    "position": "Программист"
  },
  {
    "code": "19",
    "name": "Мажулин Еремей Касьянович",
    "telephone": "56118464",
    "position": "Программист"
  },
  {
    "code": "20",
    "name": "Марченко Арина Назаровна",
    "telephone": "0403000",
    "position": "Программист"
  },
  {
    "code": "21",
    "name": "Коломийцев Борислав Евгениевич",
    "telephone": "6241811",
    "position": "Программист"
  },
  {
    "code": "22",
    "name": "Ерхова Василиса Вацлавовна",
    "telephone": "148785",
    "position": "Программист"
  },
  {
    "code": "23",
    "name": "Беломестнов Антип Эмилевич",
    "telephone": "38004",
    "position": "Программист"
  },
  {
    "code": "24",
    "name": "Суворина Татьяна Родионовна",
    "telephone": "863117",
    "position": "Программист"
  },
  {
    "code": "25",
    "name": "Сагадеев Николай Эрнестович",
    "telephone": "056010",
    "position": "Программист"
  }]
  
;

$scope.persons1 = [{
    "code": "1",
    "name": "Чалый Харитон Юриевич",
    "telephone": "1423000",
    "position": "Бухгалтер"
  },
  {
    "code": "2",
    "name": "Кочкорбаева Ефросинья Елисеевна",
    "telephone": "08659",
    "position": "Бухгалтер"
  },
  {
    "code": "3",
    "name": "Успенский Иосиф Мирославович",
    "telephone": "41766",
    "position": "Бухгалтер"
  },
  {
    "code": "4",
    "name": "Лягушкина Ева Мартыновна",
    "telephone": "500",
    "position": "Бухгалтер"
  },
  {
    "code": "5",
    "name": "Железнов Игорь Севастьянович",
    "telephone": "102677",
    "position": "Бухгалтер"
  },
  {
    "code": "6",
    "name": "Сотова Инна Ивановна",
    "telephone": "0476000",
    "position": "Бухгалтер"
  },
  {
    "code": "7",
    "name": "Наливкин Никифор Ростиславович",
    "telephone": "1802257",
    "position": "Бухгалтер"
  },
  {
    "code": "8",
    "name": "Федотова Стела Рюриковна",
    "telephone": "40528",
    "position": "Бухгалтер"
  },
  {
    "code": "9",
    "name": "Скворцов Мирослав Изяславович",
    "telephone": "484000",
    "position": "Бухгалтер"
  },
  {
    "code": "10",
    "name": "Щедрина Жанна Прокловна",
    "telephone": "2813",
    "position": "Бухгалтер"
  },
  {
    "code": "11",
    "name": "Климов Саввелий Глебович",
    "telephone": "823821",
    "position": "Бухгалтер"
  },
  {
    "code": "12",
    "name": "Рунова Ефросиния Самсоновна",
    "telephone": "4586184",
    "position": "Бухгалтер"
  },
  {
    "code": "13",
    "name": "Алифанова Всеслава Самуиловна",
    "telephone": "4790608",
    "position": "Бухгалтер"
  },
  {
    "code": "14",
    "name": "Князев Захар Адрианович",
    "telephone": "291170",
    "position": "Бухгалтер"
  },
  {
    "code": "15",
    "name": "Цорна Фаина Феодосьевна",
    "telephone": "0471869",
    "position": "Бухгалтер"
  },
  {
    "code": "16",
    "name": "Грызлов Фома Измаилович",
    "telephone": "73008",
    "position": "Бухгалтер"
  },
  {
    "code": "17",
    "name": "Бобылева Кира Эдуардовна",
    "telephone": "792984",
    "position": "Бухгалтер"
  },
  {
    "code": "18",
    "name": "Чичканов Наум Евстафиевич",
    "telephone": "6505963",
    "position": "Бухгалтер"
  },
  {
    "code": "19",
    "name": "Рытова Антонина Евграфовна",
    "telephone": "8013491",
    "position": "Бухгалтер"
  },
  {
    "code": "20",
    "name": "Хлебов Федор Родионович",
    "telephone": "244000",
    "position": "Бухгалтер"
  },
  {
    "code": "21",
    "name": "Кирилловский Ипполит Никитевич",
    "telephone": "75983",
    "position": "Бухгалтер"
  },
  {
    "code": "22",
    "name": "Курганова Наталья Платоновна",
    "telephone": "330044000",
    "position": "Бухгалтер"
  },
  {
    "code": "23",
    "name": "Дуболазов Прокл Федосиевич",
    "telephone": "7790000",
    "position": "Бухгалтер"
  },
  {
    "code": "24",
    "name": "Юматова Любовь Брониславовна",
    "telephone": "516220",
    "position": "Бухгалтер"
  },
  {
    "code": "25",
    "name": "Чалый Харитон Юриевич",
    "telephone": "1423000",
    "position": "Бухгалтер"
  },
  {
    "code": "26",
    "name": "Кочкорбаева Ефросинья Елисеевна",
    "telephone": "08659",
    "position": "Бухгалтер"
  }

];
$scope.persons2= 
[{
    "code": "1",
    "name": "Сытникова Яна Марковна",
    "telephone": "450",
    "position": "Продавец"
  },
  {
    "code": "2",
    "name": "Трутнев Мир Онисимович",
    "telephone": "5365",
    "position": "Продавец"
  },
  {
    "code": "3",
    "name": "Ященко Алла Радионовна",
    "telephone": "95027",
    "position": "Продавец"
  },
  {
    "code": "4",
    "name": "Гарин Кондрат Назарович",
    "telephone": "947418",
    "position": "Продавец"
  },
  {
    "code": "5",
    "name": "Астанкова Майя Соломоновна",
    "telephone": "8012",
    "position": "Продавец"
  },
  {
    "code": "6",
    "name": "Леваневский Иван Егорович",
    "telephone": "01103330",
    "position": "Продавец"
  },
  {
    "code": "7",
    "name": "Холодова Валерия Игоревна",
    "telephone": "01790",
    "position": "Продавец"
  },
  {
    "code": "8",
    "name": "Бобрик Сергей Климентович",

    "position": "Продавец"
  },
  {
    "code": "9",
    "name": "Киселёва Аза Моисеевна",
    "position": "Продавец",
    "telephone": "99847"
  },
  {
    "code": "10",
    "name": "Мясников Владлен Никифорович",
    "telephone": "029307",
    "position": "Продавец"
  },
  {
    "code": "11",
    "name": "Самошина Эмма Данилевна",
    "telephone": "685000",
    "position": "Продавец"
  },
  {
    "code": "12",
    "name": "Кушнарёв Бронислав Олегович",
    "telephone": "14522",
    "position": "Продавец"
  },
  {
    "code": "13",
    "name": "Янаева Мария Егоровна",
    "telephone": "3679000",
    "position": "Продавец"
  },
  {
    "code": "14",
    "name": "Эмский Гаврила Мечиславович",
    "telephone": "28",
    "position": "Продавец"
  },
  {
    "code": "15",
    "name": "Дьяченко Вероника Наумовна",
    "telephone": "0916439",
    "position": "Продавец"
  },
  {
    "code": "16",
    "name": "Курдиков Герасим Игоревич",
    "telephone": "844927",
    "position": "Продавец"
  },
  {
    "code": "17",
    "name": "Толоконская Ирина Максимовна",
    "telephone": "039126",
    "position": "Продавец"
  },
  {
    "code": "18",
    "name": "Розенбах Евграф Семенович",
    "telephone": "581000",
    "position": "Продавец"
  },
  {
    "code": "19",
    "name": "Щетинина Александра Алексеевна",
    "telephone": "1058798",
    "position": "Продавец"
  },
  {
    "code": "20",
    "name": "Чернобровин Давид Брониславович",
    "telephone": "1388",
    "position": "Продавец"
  },
  {
    "code": "21",
    "name": "Талалихина Зоя Игнатиевна",
    "telephone": "6746491",
    "position": "Продавец"
  },
  {
    "code": "22",
    "name": "Чибисов Савелий Савелиевич",
    "telephone": "9294149",
    "position": "Продавец"
  },
  {
    "code": "23",
    "name": "Курганова Наталья Платоновна",
    "telephone": "330044000",
    "position": "Продавец"
  },
  {
    "code": "24",
    "name": "Дуболазов Прокл Федосиевич",
    "telephone": "7790000",
    "position": "Продавец"
  },
  {
    "code": "25",
    "name": "Юматова Любовь Брониславовна",
    "telephone": "516220",
    "position": "Продавец"
  }];
  
  	$scope.add = function() {
	$scope.persons.push({name: 'New Person'});
    $scope.persons1.push({name:'New Person'});
    $scope.persons2.push({name:'New Person'});

  };

  $scope.saveData = function() {
 	$localStorage.persons = $scope.persons;
 	
  }
  $scope.saveData1 = function() {
  	$localStorage.persons1 = $scope.persons1;
  }

  $scope.saveData2 = function() {
 	$localStorage.persons2 = $scope.persons2;
 }

  $scope.loadData = function() {
  	$scope.persons = $localStorage.persons;
  }

  $scope.loadData1 = function() {
  	$scope.persons1 = $localStorage.persons1;
  }
  
  $scope.loadData2 = function() {
  	$scope.persons2 = $localStorage.persons2;
  }
  	
  $scope.delete = function(index) {
  	$scope.persons.pop();
  }

  $scope.delete1 = function(index) {
  	$scope.persons1.pop();
  }

  $scope.delete2 = function(index) {
  	$scope.persons2.pop();
  }

}]);

app.directive('editPersonDialog', [function() {
  return {
    restrict: 'E',
    scope: {
      model: '='
    },
    link: function(scope, element, attributes) {
      scope.$watch('model.visible', function(newValue) {
        var modalElement = element.find('.modal');
        modalElement.modal(newValue ? 'show' : 'hide');
      });
      
      element.on('shown.bs.modal', function() {
        scope.$apply(function() {
          scope.model.visible = true;
        });
      });

      element.on('hidden.bs.modal', function() {
        scope.$apply(function() {
          scope.model.visible = false;
        });
      });
      
    },
    templateUrl: 'edit-person-dialog.html',
  };
}]);
