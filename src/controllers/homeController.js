import db from '../models/index';

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log('----------------');
    console.log(data);
    return res.render('homepage.ejs', {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }

  // return res.send("Hello world from controoler");
  return res.render('homepage.ejs');
};

let getAboutPage = (req, res) => {
  return res.render('test/about.ejs');
};

//object

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
