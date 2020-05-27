import React, { Component } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";
import { Quiz } from "../../quiz";

interface Props {}
interface State {
  showQuizModal: boolean;
}

class LandingPage extends Component<Props, State> {
  state = {
    showQuizModal: false,
  };

  handleSetShowQuizModal = (value: boolean): void => {
    this.setState({ showQuizModal: value });
  };

  render() {
    const { showQuizModal } = this.state;
    return (
      <>
        {showQuizModal && (
          <Quiz setShowQuizModal={this.handleSetShowQuizModal} />
        )}
        <Hero setShowQuizModal={this.handleSetShowQuizModal} />
        <main role="main">
          <Services />
        </main>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
