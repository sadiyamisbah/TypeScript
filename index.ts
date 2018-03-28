//class definition
class YouTube{
	
	title: string;
	comments :string[];
	views : number;
	likes : number
	subscribers : number
	recommended : object


    constructor(title : string,comments : string[], views: number,likes : number, subscribers : number,recommended? : object)
    {
	    this.title = title;
	    this.comments = comments;
	    this.views = views;
	    this.likes = likes;
	    this.subscribers = subscribers;
	    this.recommended = recommended;
    }

    getTitle = () => {
	                    return this.title
                     }

    getComments = () => {
	                    return this.comments
                        }

    getViews = () => {
	                    return this.views
                     }

    getLikes = () => {
	                    return this.likes
                     }

    getSubscribers = () => {
	                            return this.subscribers
                           }

    getRecommendations = () => {
	                            return this.recommended
                               }

} //end of class


//objects creation
//object one

let oldUser = new YouTube("mean stack development",["Worth watching it!","The simplest one","good one!","Good job,keep it up"],109,89,44);
console.log(oldUser.getTitle())
let _comments : string[] = oldUser.getComments()
console.log(_comments);
//console.log(newUser.getComments())
let _views = oldUser.getViews()
console.log(_views)
let _likes = oldUser.getLikes()
console.log(_likes)
let _subscribers = oldUser.getSubscribers()
console.log(_subscribers)


//object two

let newUser = new YouTube("Web development",["Thumbs Up","Easy to follow"],8455,1033,999,oldUser);
console.log(newUser.getTitle())
console.log(newUser.getComments())
console.log(newUser.getLikes())
console.log(newUser.getViews())
console.log(newUser.getSubscribers())
console.log(newUser.getRecommendations())







//Facebook Information

//class definition

class Facebook{
	
    name : string
    birthday : string
    gender : string
    college : string[]
    place : string
    contact : number
    quote : string
    work : string[]
    friends : object



    constructor(name : string, birthday : string ,gender : string , college : string[],place : string,contact : number,quote : string,work: string[],friends? : object)
    {
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

    getName = () => {
	                    return this.name
                    }

    getBirthday = () => {
	                    return this.birthday
                        }

    getGender = () => {
	                    return this.gender
                      }

    getCollege = () => {
	                    return this.college
                        }

    getPlace = () => {
	                    return this.place
                     }

    getContact = () => {
	                    return this.contact
                       }
    getQuote = () => {
	                    return this.quote
                     }

    getWork = () => {
	                    return this.work
                    }

    getFriends = () => {
	                    return this.friends
                        }

}//end of class

//objects creation

//object one
let userOne = new Facebook("Sadiya","30/05/1994","female",["VVIET","GSC"],"Mysore",123456789,"life Is Beautiful",["LTI"]);
console.log(userOne.getName())
console.log(userOne.getBirthday())
console.log(userOne.getGender())
console.log(userOne.getCollege())
console.log(userOne.getPlace())
console.log(userOne.getContact())
console.log(userOne.getQuote())
console.log(userOne.getWork())

//object two

let userTwo = new Facebook("Naziya","29/05/1997","female",["SDM","GSC"],"Mysore",123456989,"Perseverence is the hardwork you do after you get tired of doing the hardwork you already did",["Studying"],userOne);
console.log(userTwo.getName())
console.log(userTwo.getBirthday())
console.log(userTwo.getGender())
console.log(userTwo.getCollege())
console.log(userTwo.getPlace())
console.log(userTwo.getContact())
console.log(userTwo.getQuote())
console.log(userTwo.getWork())
console.log(userTwo.getFriends())

//object three

let userThree = new Facebook("Uwaise","19/01/1993","male",["NIE","St. Philos"],"Mysore",1234558800,"Hardwork beats talent when talent doesn't work hard",["QCON","Quality"],userTwo);
console.log(userThree.getName())
console.log(userThree.getBirthday())
console.log(userThree.getGender())
console.log(userThree.getCollege())
console.log(userThree.getPlace())
console.log(userThree.getContact())
console.log(userThree.getQuote())
console.log(userThree.getWork())
console.log(userThree.getFriends())





