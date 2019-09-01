/*

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

*/

// TODO: Make checks more elegant

function isQuestion() {}

function isYellAtHim() {}

function isYellQuestion() {}

function isSayNothing() {}

export const hey = message => {
  "use strict";

  if (message === "" || message.trim() === "") {
    return "Fine. Be that way!";
  }

  if (
    message.indexOf("?") != -1 &&
    message === message.toUpperCase() &&
    !message.match(/[1-9]/i)
  ) {
    if (message.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>]/)) {
      return "Sure.";
    }
  }

  if (message === message.toUpperCase()) {
    return "Whoa, chill out!";
  }

  // var regex = new RegExp("\\?", "g");
  //var regex = new RegExp("!", "g");
  // console.log(searchString.search(regex));
  //let questionAsked = searchString.search("?") ?

  //let questionAsked = searchString.search("?");
  //console.log(searchString.search(\\?\));

  //console.log(searchString.search(\!\));

  /* Answers for questions */
  const ASKEDQUESTION = "Sure."; //new RegExp("\\?", "g");
  const ASKEDYELL = "Whoa, chill out!"; //new RegExp("!", "g");
  const ASKEDYELLAQUESTION = `Calm down, I know what I'm doing!`;
  const ASKEDNOTHING = "Fine. Be that way!";
  const askedDefault = "Whatever.";
};
