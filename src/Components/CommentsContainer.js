import React from "react";

const commentsData = [
  {
    name: "rahul",
    text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
    replies: [
      {
        name: "rahul",
        text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
        replies: [],
      },
      {
        name: "rahul",
        text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
        replies: [],
      },
      {
        name: "rahul",
        text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
        replies: [
          {
            name: "rahul",
            text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
            replies: [
              {
                name: "rahul",
                text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
                replies: [
                  {
                    name: "rahul",
                    text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "rahul",
    text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
    replies: [
      {
        name: "rahul",
        text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
        replies: [
          {
            name: "rahul",
            text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "rahul",
    text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
    replies: [
      {
        name: "rahul",
        text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
        replies: [],
      },
      {
        name: "rahul",
        text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
        replies: [],
      },
    ],
  },

  {
    name: "rahul",
    text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
    replies: [],
  },
  {
    name: "rahul",
    text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
    replies: [
      {
        name: "rahul",
        text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
        replies: [],
      },
      {
        name: "rahul",
        text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
        replies: [],
      },
    ],
  },
  {
    name: "rahul",
    text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
    replies: [],
  },
  {
    name: "rahul",
    text: "jsdffhuis fuhgui huidf  uhgd hdffu huiodhg dg iuhg ",
    replies: [],
  },
];

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex m-2 shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        src="https://img.freepik.com/free-icon/user_318-286823.jpg"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
