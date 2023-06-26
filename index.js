#!/usr/bin/env node

import chalk, { Chalk } from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';


let playername;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const sleep1 = (ms = 2000) => new Promise((r) => setTimeout(r, ms));


async function welcome() {
  console.log(chalk.green(
    `Hey ${playername},I am Ayush, a second year B.tech student pursuing B.tech in Artificial Intelligence and Data Science from GGSIPU,New Delhi. I Have worked upon my skills as a MERN stack developer and worked on making amazing projects which certainly did give me new opportunities and helped me grow as a Fullstack Developer. \n`
  ));

   question1();

  // console.log(`
  //   ${chalk.bgBlue('HOW TO PLAY')} 
  //   I am a process on your computer.
  //   If you get any question wrong I will be ${chalk.bgRed('killed')}
  //   So get all the questions right...

  // `);
}

async function askName() {
  await sleep();

    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name?',
      default() {
        return 'Player';
      },
    });
  
    playername = answers.player_name;
    console.log(chalk.greenBright(`Hi ${playername}`))
  }


  async function inro() {
  figlet(`Hi  I am   Ayush !`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    const rainbowTitle = chalkAnimation.rainbow(
      'Ayush Gupta \n'
    );
  rainbowTitle.stop();
  });
  await sleep();

  }  


async function connect() {
    const answers = await inquirer.prompt({
      name: 'connect',
      type: 'list',
      message: chalk.cyanBright('Connect with me !\n'),
      choices: [
        'Twitter : https://twitter.com/Ayush3241 ',
        'Linkedin : https://www.linkedin.com/in/ayush-gupta-253092227/',
        'Insta : https://www.instagram.com/_ayush_ftw/',
        'Github : https://github.com/ayushgupta4002'
      ],
    });
    question1()
  }
async function question1() {
  await sleep();

    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: '\n Here you go !\n',
      choices: [
        'Connect With Me ! ',
        'Who am I ?',
        'Exit'
      ],
    });
    if (answers.question_1 === 'Exit') {
            process.exit(0);
    }
  
    return handleAnswer(answers.question_1 === 'Who am I ?');
  }

  async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Please Wait...').start();
    await sleep();
  
    if (isCorrect) {
      spinner.success(welcome());
    } else {
      spinner.success(connect());
    }
  }
  

inro();
await askName();
question1()
