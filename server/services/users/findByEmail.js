// need to require the Users model
const { Users } = require("../../models");

module.exports = async (email) => {
	const user = await Users.findOne({
  	where: {
    	email: email,
    },
	});
	
	if (!user) {
		return null
	}

  return user.toJSON()
}