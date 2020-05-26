const { RESTDataSource } = require('apollo-datasource-rest');

class FeelingsAPI extends RESTDataSource {
  constructor() {
    super();
    /**
     * @description can implements the rest service here
     * read more about in https://www.apollographql.com/docs/apollo-server/data/data-sources/
     */
    this.baseURL = 'http://link.to.api';
  }

  async getFeelings() {
    // return this.get();
    return [
      { value: 'feeling.happy', icon: '😊' },
      { value: 'feeling.confident', icon: '😍' },
      { value: 'feeling.proud', icon: '😎' },
      { value: 'feeling.greatful', icon: '😇' },
      { value: 'feeling.numb', icon: '😐' },
      { value: 'feeling.angry', icon: '😠' },
      { value: 'feeling.bored', icon: '🙁' },
      { value: 'feeling.joyful', icon: '🤗' },
      { value: 'feeling.optimistic', icon: '😃' },
      { value: 'feeling.okay', icon: '🙆‍♂️' },
      { value: 'feeling.depressed', icon: '😢' },
      { value: 'feeling.wicked', icon: '😈' },
      { value: 'feeling.excited', icon: '😄' },
      { value: 'feeling.anxious', icon: '😰' },
      { value: 'feeling.stressed', icon: '🤒' },
      { value: 'feeling.tired', icon: '😩' },
      { value: 'feeling.ashamed', icon: '😳' },
      { value: 'feeling.insecure', icon: '😞' },
      { value: 'feeling.sad', icon: '😥' },
      { value: 'feeling.envious', icon: '😏' },
      { value: 'feeling.disgusted', icon: '🤢' },
      { value: 'feeling.friendly', icon: '🙂' },
      { value: 'feeling.positive', icon: '👌' },
    ];
  }
}

module.exports = FeelingsAPI;
