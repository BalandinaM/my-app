import dialogsReduser from "./dialogsReducer";
import profileReduser from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      srcImg: 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338& ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais',

      postsData: [
        {id: 1, message: 'Hi, how are you?', like: '78'},
        {id: 2, message: 'It is my second post!', like: '1'},
        {id: 3, message: 'It is my first post! Hello, world! Hello, React!', like: '100'},
      ],

      newPostText: 'it-kamasutra',
    },

    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Sergey', hrefImg: 'https://img.freepik.com/free-photo/cute-dog-with-sunglasses-posing-for-portrait-generative-ai_188544-12590.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1714348800&semt=ais',},
        {id: 2, name: 'Katy', hrefImg: 'https://i.pinimg.com/736x/37/d1/28/37d12877e296094971827f1e8b909bd4.jpg',},
        {id: 3, name: 'Vera', hrefImg: 'https://avavatar.ru/images/full/47/HF24oiPlGyYzBjF2.jpg',},
        {id: 4, name: 'Alise', hrefImg: 'https://shapka-youtube.ru/wp-content/uploads/2021/10/ava-sobaka-v-kapyushone.jpg',},
        {id: 5, name: 'Helen', hrefImg: 'https://kartinki.pics/uploads/posts/2022-05/1652237087_1-kartinkin-net-p-kartinki-na-avu-sobaki-1.jpg',},
        {id: 6, name: 'Dimon', hrefImg: 'https://i.pinimg.com/originals/f8/2c/4d/f82c4d72749605a09c761cd0825ff330.jpg',},
      ],

      postData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'The style prop works like a normal style prop'},
        {id: 3, message: 'You can pass a render prop as children to customize the content'},
        {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
      ],

      newMessageBody: '',
    },

    navBar: {
      navList: [
        {item: 'Profile', href:'/profile'},
        {item:'Messages', href:'/dialogs'},
        {item:'News', href:'/news'},
        {item:'Music', href:'/music'},
        {item:'Settings', href:'/settings'},
      ],
    }
  },
  _callSubscriber() {
    console.log('state change')
  },

  getState () {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
