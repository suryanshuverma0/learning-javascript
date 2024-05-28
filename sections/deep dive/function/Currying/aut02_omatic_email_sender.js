//this is one of the practical application of the currying

const emailSender = (to) => (subject) => (body) => {
  console.log(`Sending email to ${to} for ${subject} ${body}`);
};


const email = emailSender("veenasa676@gmail.com")("Due date of assignment submission")("Todday is the last day of the assignment submission for the computer science. So hurry up!");