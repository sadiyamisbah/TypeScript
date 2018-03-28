//class definition
var YouTube = /** @class */ (function () {
    function YouTube(title, comments, views, likes, subscribers, recommended) {
        var _this = this;
        this.getTitle = function () {
            return _this.title;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.getRecommendations = function () {
            return _this.recommended;
        };
        this.title = title;
        this.comments = comments;
        this.views = views;
        this.likes = likes;
        this.subscribers = subscribers;
        this.recommended = recommended;
    }
    return YouTube;
}()); //end of class
//objects creation
//object one
var oldUser = new YouTube("mean stack development", ["Worth watching it!", "The simplest one", "good one!", "Good job,keep it up"], 109, 89, 44);
console.log(oldUser.getTitle());
var _comments = oldUser.getComments();
console.log(_comments);
//console.log(newUser.getComments())
var _views = oldUser.getViews();
console.log(_views);
var _likes = oldUser.getLikes();
console.log(_likes);
var _subscribers = oldUser.getSubscribers();
console.log(_subscribers);
//object two
var newUser = new YouTube("Web development", ["Thumbs Up", "Easy to follow"], 8455, 1033, 999, oldUser);
console.log(newUser.getTitle());
console.log(newUser.getComments());
console.log(newUser.getLikes());
console.log(newUser.getViews());
console.log(newUser.getSubscribers());
console.log(newUser.getRecommendations());
//Facebook Information
//class definition
var Facebook = /** @class */ (function () {
    function Facebook(name, birthday, gender, college, place, contact, quote, work, friends) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function (dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getCollege = function () {
            return _this.college;
        };
        this.getPlace = function () {
            return _this.place;
        };
        this.getContact = function () {
            return _this.contact;
        };
        this.getQuote = function () {
            return _this.quote;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.college = college;
        this.place = place;
        this.contact = contact;
        this.quote = quote;
        this.work = work;
        this.friends = friends;
    }
    return Facebook;
}()); //end of class
//objects creation
//object one
var userOne = new Facebook("Sadiya", "1994-05-30", "female", ["VVIET", "GSC"], "Mysore", 123456789, "life Is Beautiful", ["LTI"]);
console.log(userOne.getName());
console.log(userOne.getBirthday());
console.log(userOne.getAge(userOne.getBirthday()));
console.log(userOne.getGender());
console.log(userOne.getCollege());
console.log(userOne.getPlace());
console.log(userOne.getContact());
console.log(userOne.getQuote());
console.log(userOne.getWork());
//object two
var userTwo = new Facebook("Naziya", "1997-05-29", "female", ["SDM", "GSC"], "Mysore", 123456989, "Perseverence is the hardwork you do after you get tired of doing the hardwork you already did", ["Studying"], userOne);
console.log(userTwo.getName());
console.log(userTwo.getBirthday());
console.log(userOne.getAge(userTwo.getBirthday()));
console.log(userTwo.getGender());
console.log(userTwo.getCollege());
console.log(userTwo.getPlace());
console.log(userTwo.getContact());
console.log(userTwo.getQuote());
console.log(userTwo.getWork());
console.log(userTwo.getFriends());
//object three
var userThree = new Facebook("Uwaise", "1993-01-19", "male", ["NIE", "St. Philos"], "Mysore", 1234558800, "Hardwork beats talent when talent doesn't work hard", ["QCON", "Quality"], userTwo);
console.log(userThree.getName());
console.log(userThree.getBirthday());
console.log(userOne.getAge(userThree.getBirthday()));
console.log(userThree.getGender());
console.log(userThree.getCollege());
console.log(userThree.getPlace());
console.log(userThree.getContact());
console.log(userThree.getQuote());
console.log(userThree.getWork());
console.log(userThree.getFriends());
