// 1.How many total commits were made in all of Steve's events?

let commitsTotal = 0;
githubData.forEach(steveEvent => {
  if (steveEvent.type === "PushEvent"){
  commitsTotal += steveEvent.payload.commits.length;
  }
})

console.log('Total Commits!', commitsTotal)

// 2.How many of each event type are there? (PullRequestEvent, 
// PushEvent, etc)

let eventTypes = {
  PushEvent: 0,
  PullRequestEvent: 0,
  IssueCommentEvent: 0,
  DeleteEvent: 0,
  CreateEvent: 0,
}

githubData.forEach(stevent => {
 console.log("type", stevent.type);
 eventTypes[stevent.type] +=1 ;
})
console.log(eventTypes);

// 3.List all Github users who submitted a pull request that was 
// approved by Steve.
// payload > pull_request > user > login

let approvedUsers = [];

githubData.forEach(stevent => {
  if (stevent.type === "PullRequestEvent") {
  console.log('users approved?', stevent.payload.pull_request.user.login);
  if (!approvedUsers.includes("stevent.payload.pull_request.user.login")) {
  approvedUsers.push(stevent.payload.pull_request.user.login)
  }
  }
})
console.log('approved users:', approvedUsers);
// 4.List all repositories on which Steve had an event, 
// and show how many events were on each one.

let reposEvents = {
  "nashville-software-school/bangazon-llc" : 0,
  "nashville-software-school/client-side-mastery":0,
  "nss-day-cohort-27/brenda-snack-cake-store":0,
  "stevebrownlee/vps-setup":0,


}

githubData.forEach(eventObj => {
console.log('repo name', eventObj.repo.name);
reposEvents[eventObj.repo.name] ++;
})

console.log('repos and their events', reposEvents);

// 5.Which event had the most number of commits?

let eventsCommits = {}
githubData.forEach(githubEvent => {
  if (githubEvent.type === "PushEvent") {
    console.log("The event id as string", githubEvent.id, "commitslenght", githubEvent.payload.commits.length)
    eventsCommits[githubEvent.id] = githubEvent.payload.commits.length;
  }
})

console.log('evetns and their commits', eventsCommits);
// 6.Which programming langugages were affected by Steve's events?

githubData.forEach(stevent => {
  if (stevent.type === "PullRequestEvent") {
  console.log('languages', stevent.payload.pull_request.head.repo.language);
  }
})

// 7.What programming language was the most affected by Steve's events?

let eventsLanguage = {}

githubData.forEach(githubLanguage => {
  console.log("most languages", githubLanguage.payload.pull_request.head.repo.language);
  eventsLanguage[githubLanguage.language] = githubLanguage.payload.pull_request.head.repo.language.length;
})

