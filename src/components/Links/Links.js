import React from 'react';

import email from 'assets/images/socials/email.svg';
import github from 'assets/images/socials/github.svg';
import instagram from 'assets/images/socials/instagram.svg';
import medium from 'assets/images/socials/medium.svg';
import skype from 'assets/images/socials/skype.svg';
import phone from 'assets/images/socials/phone.svg';
import youtube from 'assets/images/socials/youtube.svg';
import soundcloud from 'assets/images/socials/soundcloud.svg';

import './Links.scss'

class SocialLink extends React.Component {
  render() {
    return (
      <a className="link" target="_blank" rel="noopener noreferrer" title={this.props.title} href={this.props.href}>
        <img className="link__img" alt={this.props.title} src={this.props.icon}></img>
      </a>
    )
  }
}

class EmailSocialLink extends React.Component {
  render() {
    return (
      <SocialLink
        title="Электронная почта"
        href="mailto:oxmap@yandex.com"
        icon={email}
      >
      </SocialLink>
    )
  }
}

class PhoneSocialLink extends React.Component {
  render() {
    return (
      <SocialLink
        title="Телефон"
        href="tel:+79069474799"
        icon={phone}
      >
      </SocialLink>
    )
  }
}

class SkypeSocialLink extends React.Component {
  render() {
    return (
      <SocialLink
        title="Skype"
        href="skype:oxmap?chat"
        icon={skype}
      >
      </SocialLink>
    )
  }
}

class GithubSocialLink extends React.Component {
  render() {
    return (
      <SocialLink
        title="Github"
        href="https://github.com/oxmap"
        icon={github}
      >
      </SocialLink>
    )
  }
}

class MediumSocialLink extends React.Component {
  render() {
    return (
      <SocialLink
        title="Medium"
        href="https://medium.com/@oxmap"
        icon={medium}
      >
      </SocialLink>
    )
  }
}

class YoutubeSocialLink extends React.Component {
  render() {
    return (
      <SocialLink
        title="Youtube"
        href="https://www.youtube.com/channel/UCZTuHn1MrF371j1sTCvbZtQ"
        icon={youtube}
      >
      </SocialLink>
    )
  }
}

class SoundCloudSocialLink extends React.Component {
  render() {
    return (
      <SocialLink
        title="SoundCloud"
        href="https://soundcloud.com/oxmap"
        icon={soundcloud}
      >
      </SocialLink>
    )
  }
}

class InstagramSocialLink extends React.Component {
  render() {
    return (
      <SocialLink
        title="Instagram"
        href="https://www.instagram.com/oxmap/"
        icon={instagram}
      >
      </SocialLink>
    )
  }
}

class Links extends React.Component {
  render() {
    return (
      <div className="row container">
        <div className="link-container row" >
          <EmailSocialLink />
          <PhoneSocialLink />
          <SkypeSocialLink />
          <GithubSocialLink />
          <MediumSocialLink />
          <YoutubeSocialLink />
          <SoundCloudSocialLink />
          <InstagramSocialLink />
        </div>
        <a className="cv" href="https://www.dropbox.com/s/pe2feezius84svn/%D1%80%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5.docx?dl=0" target="_blank" rel="noopener noreferrer">Резюме</a>
      </div>
    )
  }
}

export default Links
