import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import Button from '../components/BaseButton';
import IcArrowSignUp from '../assets/icons/ic-signup-arrow.svg';
import IcArrowRight from '../assets/icons/ic-arrow-right.svg';
import SizedBox from '../components/SizedBox';
import FcLogo1 from '../assets/images/ic-fclogo1.svg';
import FcLogo2 from '../assets/images/ic-fclogo2.svg';
import FcLogo3 from '../assets/images/ic-fclogo3.svg';
import FcLogo4 from '../assets/images/ic-fclogo4.svg';
import FcLogo5 from '../assets/images/ic-fclogo5.svg';
import ImgSupport from '../assets/images/img-code.svg';
import ImgSupport2 from '../assets/images/img-code2.svg';
import ImgSupport3 from '../assets/images/img-support.svg';
import ImgService1 from '../assets/images/img-service1.svg';
import ImgService2 from '../assets/images/img-service2.svg';

const Home = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        {/* Moto */}
        <section>
          <div className='getademo'>
            <div className='typecode-title'>
              Expert Developers for a Connected{' '}
              <span>{`{World}`}</span>
            </div>
            <div className='cta'>
              <div>
                <Button background='#1C2012' color='#FFFFFF'>
                  Get A Demo{' '}
                  <img src={IcArrowSignUp} alt='ic-arrow-signup' />
                </Button>
              </div>
            </div>
          </div>
          <SizedBox height='20px' />
          <div className='watchavideo'>
            <div class='cta'>
              <Button color='#03090E'>
                <img
                  src={IcArrowRight}
                  alt='ic-arrow-signup'
                  style={{
                    position: 'relative',
                    top: '-3px',
                    marginRight: '10px',
                  }}
                />{' '}
                Watch a Video
              </Button>
            </div>
            <div className='caption'>
              <h5>
                Circle is a code development platform that gives
                innovators the speed and reliability they need to
                create at the speed of inspiration
              </h5>
            </div>
          </div>
        </section>
        {/* Hero */}
        <section>
          <div className='hero'></div>
        </section>
        <section>
          <SizedBox height='80px' />
          <div class='products'>
            <div className='caption'>
              Providing power to the world's best product teams.
            </div>
            <div className='image'>
              <img src={FcLogo1} alt='fc-1' />
              <img src={FcLogo2} alt='fc-2' />
              <img src={FcLogo3} alt='fc-3' />
              <img src={FcLogo4} alt='fc-4' />
              <img src={FcLogo5} alt='fc-5' />
            </div>
          </div>
        </section>

        {/* Finnaly Develop */}
        <section class='green-circle'>
          <div className='products'>
            <div className='two-block'>
              <div className='block1'>
                <div className='typecode-title'>
                  Finally you can develop{' '}
                  <span>{`{full - stack}`}</span> web applications in
                  one place.
                </div>
                <div className='description'>
                  Amet minim mollit non deserunt ullamco est sit
                  aliqua dolor do amet sint. Velit officia consequat
                  duis enim velit mollit. Exercitation veniam
                  consequat sunt nostrud ame
                </div>
              </div>
              <div className='block2'>
                <img src={ImgSupport} alt='support' />
              </div>
            </div>
          </div>
        </section>

        {/* Finnaly Develop */}
        <section className='services'>
          <div className='box-wrapper'>
            <div className='service active'>
              <div className='title'>Optimized Frameworks</div>
              <div className='description'>
                A custom environment designed especially for
                developing and facilitating React, Vue, Angular, and
                other.
              </div>
              <div className='readmore'>
                <div className='btn-readmore'>
                  Read More{' '}
                  <img src={IcArrowSignUp} alt='ic-arrow-signup' />
                </div>
              </div>
            </div>
            <div className='service'>
              <div className='title'>Integrated with GitHub</div>
              <div className='description'>
                A custom environment designed especially for
                developing and facilitating React, Vue, Angular, and
                other.
              </div>
              <div className='readmore'>
                <div className='btn-readmore'>
                  Read More{' '}
                  <img src={IcArrowSignUp} alt='ic-arrow-signup' />
                </div>
              </div>
            </div>
          </div>
          <div class='more-service'>
            <div class='btn'>
              Explore More Service{' '}
              <img src={IcArrowSignUp} alt='ic-arrow-signup' />
            </div>
          </div>
        </section>

        <section className='issues services distance'>
          <div className='issues-title typecode-title'>
            Concentrate on <span>{`{larger}`}</span> issues.
          </div>
          <div className='issues-subtitle'>
            Spend less time on repetitive code patterns and more time
            on what really matters building great software.
          </div>
          <div className='box-wrapper mt-3'>
            <div className='service bg-transparent'>
              <div className='title'>Optimized Frameworks</div>
              <div className='description'>
                A custom environment designed especially for
                developing and facilitating React, Vue, Angular, and
                other.
              </div>
              <div className='readmore'>
                <div className='btn-readmore'>
                  Read More{' '}
                  <img src={IcArrowSignUp} alt='ic-arrow-signup' />
                </div>
              </div>
              <div className='image-service'>
                <img src={ImgService1} alt='service-1' />
              </div>
            </div>
            <div className='service bg-transparent'>
              <div className='title'>Integrated with GitHub</div>
              <div className='description'>
                A custom environment designed especially for
                developing and facilitating React, Vue, Angular, and
                other.
              </div>
              <div className='readmore'>
                <div className='btn-readmore'>
                  Read More{' '}
                  <img src={IcArrowSignUp} alt='ic-arrow-signup' />
                </div>
              </div>
              <div className='image-service'>
                <img src={ImgService2} alt='service-2' />
              </div>
            </div>
          </div>
          <div class='more-service'>
            <div class='btn'>
              Explore More Service{' '}
              <img src={IcArrowSignUp} alt='ic-arrow-signup' />
            </div>
          </div>
        </section>
      </Container>

      <div style={{ minHeight: '100vh' }} className='distance'>
        <Container fluid>
          <section className='circle-provide pt-5'>
            <div className='typecode-title'>
              Circle provides teams and individuals with customizable{' '}
              <span>{`{management tools}`}</span> for your source
              code.
            </div>
          </section>
        </Container>

        <div className='costumizeable mt-5'>
          <div className='two-block'>
            <div className='block1'>
              <div className='description'>
                Create issues, sections into tasks, track
                relationships, add custom spaces, and initiate
                discussions. Visualize large projects with
                spreadsheets or codeboards, and use the help of code
                systems to automate everything.
              </div>
              <div
                className='cta mt-5'
                style={{ display: 'flex', gap: '15px' }}
              >
                <Button color='#03090E'>
                  <img
                    src={IcArrowRight}
                    alt='ic-arrow-signup'
                    style={{
                      position: 'relative',
                      top: '-3px',
                      marginRight: '10px',
                    }}
                  />{' '}
                  Watch a Video
                </Button>
                <Button
                  background='#1C2012'
                  color='#FFFFFF'
                  className='btnfilter'
                >
                  Get A Demo{' '}
                  <img src={IcArrowSignUp} alt='ic-arrow-signup' />
                </Button>
              </div>
            </div>
            <div className='block2'>
              <div className='image'>
                <img src={ImgSupport2} alt='Support 2' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='usefulassist distance'>
        <Container fluid>
          <section
            className='circle-provide pt-5'
            style={{
              textAlign: 'center',
            }}
          >
            <div className='typecode-title assist-title'>
              Useful <span>{`{software}`}</span> that can assist.
            </div>
          </section>
        </Container>

        <div className='costumizeable mb-5 mt-5'>
          <div className='support' style={{ overflow: 'hidden' }}>
            <img
              src={ImgSupport3}
              alt='support'
              className='supportImage'
            />
          </div>
        </div>

        <Container fluid>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button color='#03090E'>
              <img
                src={IcArrowRight}
                alt='ic-arrow-signup'
                style={{
                  position: 'relative',
                  top: '-3px',
                  marginRight: '10px',
                }}
              />{' '}
              See Full Software
            </Button>
          </div>
        </Container>
      </div>

      <Container fluid>
        <section className='distance'>
          <div className='join'>
            <div className='join-box'>
              <div className='block'>
                <div className='typecode-title'>
                  Join the <span>{`{community}`}</span> around the
                  world
                </div>
                <div className='description'>
                  A custom environment designed especially for
                  developing and facilitating React, Vue, Angular, and
                  other.
                </div>
              </div>
              <div className='more-service'>
                <div class='btn'>
                  Explore More Service{' '}
                  <img src={IcArrowSignUp} alt='ic-arrow-signup' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <div className='footer'>
        <Container fluid>
          <div className='footer-link'>
            <div className='footer-link-item'>
              <div className='link-title'>Company</div>
              <ul>
                <li>How it Works</li>
                <li>Features</li>
                <li>Docs</li>
                <li>Blog</li>
                <li>About</li>
              </ul>
            </div>
            <div className='footer-link-item'>
              <div className='link-title'>Resource</div>
              <ul>
                <li>Docs</li>
                <li>Forum</li>
                <li>Careers</li>
                <li>Templates</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div className='footer-link-item'>
              <div className='link-title'>Legal</div>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Guidelines</li>
                <li>Fair Use Policy</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div className='footer-link-item'>
              <div className='link-title'>Support</div>
              <ul>
                <li>FAQs</li>
                <li>Call Center</li>
                <li>Maintance</li>
                <li>Status</li>
              </ul>
            </div>
            <div className='footer-link-item'>
              <div className='link-title'>Platform</div>
              <ul>
                <li>Team</li>
                <li>Security</li>
                <li>Roadmap</li>
                <li>Features</li>
                <li>Enterprise</li>
              </ul>
            </div>
          </div>
          <SizedBox height='20px' />
          <div style={{ textAlign: 'center', padding: '20px 0px' }}>
            2022 All Rights Reserved © Circle
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
