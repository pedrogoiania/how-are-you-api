const { RESTDataSource } = require('apollo-datasource-rest');

const mock = [
  {
    feelingDescription: 'felling.description', id: 0, value: 'feeling.happy', icon: '😊',
  },
  {
    feelingDescription: 'felling.description', id: 1, value: 'feeling.confident', icon: '😍',
  },
  {
    feelingDescription: 'felling.description', id: 2, value: 'feeling.proud', icon: '😎',
  },
  {
    feelingDescription: 'felling.description', id: 3, value: 'feeling.greatful', icon: '😇',
  },
  {
    feelingDescription: 'felling.description', id: 4, value: 'feeling.numb', icon: '😐',
  },
  {
    feelingDescription: 'felling.description', id: 5, value: 'feeling.angry', icon: '😠',
  },
  {
    feelingDescription: 'felling.description', id: 6, value: 'feeling.bored', icon: '🙁',
  },
  {
    feelingDescription: 'felling.description', id: 7, value: 'feeling.joyful', icon: '🤗',
  },
  {
    feelingDescription: 'felling.description', id: 8, value: 'feeling.optimistic', icon: '😃',
  },
  {
    feelingDescription: 'felling.description', id: 9, value: 'feeling.okay', icon: '🙆‍♂️',
  },
  {
    feelingDescription: 'felling.description', id: 10, value: 'feeling.depressed', icon: '😢',
  },
  // { id: 1, value: 'feeling.wicked', icon: '😈' },
  // { id: 1, value: 'feeling.excited', icon: '😄' },
  // { id: 1, value: 'feeling.anxious', icon: '😰' },
  // { id: 1, value: 'feeling.stressed', icon: '🤒' },
  // { id: 1, value: 'feeling.tired', icon: '😩' },
  // { id: 1, value: 'feeling.ashamed', icon: '😳' },
  // { id: 1, value: 'feeling.insecure', icon: '😞' },
  // { id: 1, value: 'feeling.sad', icon: '😥' },
  // { id: 1, value: 'feeling.envious', icon: '😏' },
  // { id: 1, value: 'feeling.disgusted', icon: '🤢' },
  // { id: 1, value: 'feeling.friendly', icon: '🙂' },
  // { id: 1, value: 'feeling.positive', icon: '👌' },
];

class FeelingsAPI extends RESTDataSource {
  constructor() {
    super();
    /**
     * @description can implements the rest service here
     * read more about in https://www.apollographql.com/docs/apollo-server/data/data-sources/
     */
    this.baseURL = 'http://link.to.api';
  }

  async getFeeling(id) {
    const feeling = mock.find(item => item.id === id);

    if (feeling) {
      return feeling;
    }

    throw Error({
      err: 'objeto nao encontrado',
    });
  }

  async getFeelings() {
    // return this.get();
    return mock;
  }
}

module.exports = FeelingsAPI;
