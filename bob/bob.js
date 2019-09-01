/*

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

*/

function isQuestion() {}

function isYellAtHim() {}

function isYellQuestion() {}

function isSayNothing() {}

export const hey = message => {
  "use strict";

  /* Answers for questions */
  const ASKEDQUESTION = "Sure.";
  const ASKEDYELL = "Whoa, chill out!";
  const ASKEDYELLAQUESTION = `Calm down, I know what I'm doing!`;
  const ASKEDNOTHING = "Fine. Be that way!";
  const askedDefault = "Whatever.";

  return "Whatever.";

  console.log(message);
};
