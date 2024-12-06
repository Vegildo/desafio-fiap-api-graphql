const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = []; // Simula banco de dados

const investments = []; // Simula banco de dados de investimentos

const resolvers = {
  Query: {
    me: (_, __, { user }) => {
      if (!user) throw new Error("Not authenticated");
      return users.find((u) => u.id === user.id);
    },
    investments: (_, __, { user }) => {
      if (!user) throw new Error("Not authenticated");
      return investments.filter((inv) => inv.userId === user.id);
    },
  },
  Mutation: {
    register: (_, { name, email, password }) => {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = { id: Date.now().toString(), name, email, password: hashedPassword };
      users.push(user);
      return user;
    },
    login: (_, { email, password }) => {
      const user = users.find((u) => u.email === email);
      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new Error("Invalid credentials");
      }
      return jwt.sign({ id: user.id, email: user.email }, "secret", { expiresIn: "1h" });
    },
    addInvestment: (_, { name, amount }, { user }) => {
      if (!user) throw new Error("Not authenticated");
      const investment = {
        id: Date.now().toString(),
        name,
        amount,
        date: new Date().toISOString(),
        userId: user.id,
      };
      investments.push(investment);
      return investment;
    },
    deleteInvestment: (_, { id }, { user }) => {
      if (!user) throw new Error("Not authenticated");
      const index = investments.findIndex((inv) => inv.id === id && inv.userId === user.id);
      if (index === -1) throw new Error("Investment not found");
      investments.splice(index, 1);
      return true;
    },
  },
};

module.exports = resolvers;