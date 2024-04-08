const exco = (error, success) => {
  if (error) {
    console.log('Error in happened while verifying transporter');
  } else {
    console.log('ready for message delivery');
    return success;
  }
};

export default exco;
