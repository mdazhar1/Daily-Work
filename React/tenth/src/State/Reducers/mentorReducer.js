const initialState = {
    mentors: [
      {
        name: "Maaz",
        img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
        desc: "React Teacher",
      },
      {
        name: "Mushu",
        img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
        desc: "React Teacher",
      },
      {
        name: "Azhar",
        img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
        desc: "React Teacher",
      },
      {
        name: "Yash",
        img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
        desc: "React Teacher",
      },
    ],
  };
  export const mentorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_MENTORS":
        return {
          ...state,
          mentors: [...state.mentors, action.mentors],
        };
      default:
        return state;
    }
  };