module.exports = {
  Query: {
    getAllFeelings: async (_, __, { dataSources: { FeelingsAPI } }) => {
      const feelings = await FeelingsAPI.getFeelings();
      return feelings;
    },
  },
  Feeling: {
    title: (feeling) => feeling.value,
  },
};
