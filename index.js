import chalk from "chalk";
import boxen from "boxen";
import { user } from "./user.js";

const resume = `
${chalk.bold(user.name)}
${chalk.blue(user.title)}
${chalk.gray(user.linkedin_url)}
${chalk.gray(user.github_url)}

${chalk.bold("Skills: " + user.skills.join(", "))} 

${chalk.bold("Experience:")}
${user.experience
  .map((exp) => {
    return `- ${chalk.green(exp.organization)} - ${exp.role} (${exp.from}-${
      exp.to
    })\n`;
  })
  .join("")}

${chalk.bold("Education:")}
${user.education
  .map((edu) => {
    return `- ${edu.course} - ${edu.organization} \n`;
  })
  .join("")}`;

console.log(
  boxen(resume, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan",
  })
);
