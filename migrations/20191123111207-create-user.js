'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_guild: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'guilds',
					key: 'id'
				}
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			ingame_name: {
				type: Sequelize.STRING
			},
			ingame_level: {
				type: Sequelize.INTEGER
			},
			available_for_gw: {
				allowNull: false,
				type: Sequelize.BOOLEAN
			},
			is_in_gw: {
				allowNull: false,
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};