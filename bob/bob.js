const Bob = {
  responses: {
    silence: "Fine. Be that way!",
    shoutedQuestion: "Calm down, I know what I'm doing!",
    yelling: "Whoa, chill out!",
    question: "Sure.",
    default: "Whatever."
  }
};
const emptyString = s => s.trim().length == 0;
const analyzers = {
  silence: query => emptyString(query),
  yelling: query => query.match(/[A-Z]/) && query == query.toUpperCase(),
  question: query => query.trimEnd().endsWith("?"),
  shoutedQuestion: query =>
    analyzers.yelling(query) && analyzers.question(query)
};
const responder = responders => {
  return query => {
    for (let [queryType, response] of Object.entries(responders)) {
      if (queryType == "default") continue;

      if (analyzers[queryType](query)) return response;
    }
    return responders.default;
  };
};

const bob = responder(Bob.responses);
export { bob as hey };
