import React, { Component } from 'react';
import styles from '../../css/items.module.css';
import Title from '../Title';
import Tour from './Tour';
export default class TourList extends Component {
  state = {
    tours: [],
    sortTours: [],
  };
  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortTours: this.props.tours.edges,
    });
  }
  render() {
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />
        <div className={styles.center}>
          {this.state.sortTours.map(({ node }) => {
            return <Tour tour={node} key={node.contentful_id} />;
          })}
        </div>
      </section>
    );
  }
}
