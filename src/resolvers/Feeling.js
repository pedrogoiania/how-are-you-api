module.exports = {
  Query: {
    getAllFeelings: async (_, __, { dataSources: { FeelingsAPI } }) => {
      const feelings = await FeelingsAPI.getFeelings();
      return feelings;
    },
    feelingDetail: async (_, { id }, { dataSources: { FeelingsAPI } }) => {
      const feeling = FeelingsAPI.getFeeling(id);

      const delay = async t => new Promise(resolve => setTimeout(resolve, t));

      await delay(3000);
      return feeling;
    },
  },
  Feeling: {
    title: (feeling) => feeling.value,
    description: (feeling, _, __) => feeling.feelingDescription,
  },
};
