import React from 'react';
import HomePage from './Home';
import AboutPage from './About';
import PrivacyPage from './Privacy';
import QuestionsPage from './Questions';
import TermsPage from './Terms';
import FormPage from './Form';
import RaterPage from './Rater';

export const Home = () => (
  <HomePage />
);

export const About = () => (
  <AboutPage />
);

export const Questions = () => (
  <QuestionsPage />
);

export const Privacy = () => (
  <PrivacyPage />
);

export const Terms = () => (
  <TermsPage />
);

export const Quote = () => (
  <FormPage />
);

export const Rater = () =>(
  <RaterPage />
);
