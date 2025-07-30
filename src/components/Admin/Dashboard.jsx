import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="top-section">
        <div className="live-broadcasts">
          <h3>Live broadcasts</h3>
          <div className="avatars">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={`https://i.pravatar.cc/50?img=${i + 1}`} alt="User" />
            ))}
            <button className="more-btn">More</button>
          </div>
        </div>

        <div className="search-section">
          <h3>Search course</h3>
          <div className="search-box">
            <input type="text" placeholder="What do you want to learn?" />
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="main-section">
        <div className="courses">
          <h3>My courses</h3>
          <div className="course-cards">
            {[
              { title: 'Cinema 4D', desc: 'Elements design for web sites and mobile apps', done: 8, total: 12 },
              { title: 'UI/UX Design', desc: 'From concept to prototype', done: 4, total: 15 },
              { title: 'Graphic Design', desc: 'Digital computer graphics', done: 1, total: 10 },
            ].map((course, i) => (
              <div className="course-card glass" key={i}>
                <h4>{course.title}</h4>
                <p>{course.desc}</p>
                <div className="progress">
                  <span>{`${String(course.done).padStart(2, '0')}/${String(course.total).padStart(2, '0')}`}</span>
                  <div className="bar">
                    <div
                      className="filled"
                      style={{ width: `${(course.done / course.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
            <div className="add-card">+ Add</div>
          </div>
        </div>

        <div className="progress-section">
          <h3>My progress</h3>
          <div className="progress-box glass">
            <div className="circular">134</div>
            <div className="details">
              <p><strong>75/115</strong> Visited lectures</p>
              <p><strong>32/94</strong> Completed tasks</p>
            </div>
          </div>

          <div className="popular">
            <h3>Popular lectures <a href="#">View all</a></h3>
            {[
              { title: 'Human centered design', time: '1h 30min' },
              { title: 'E-learning & digital cultures', time: '45 min' },
              { title: 'SQL: nothing superfluous', time: '1h 15 min' },
            ].map((lecture, i) => (
              <div className="lecture glass" key={i}>
                <img src={`https://i.pravatar.cc/30?img=${i + 6}`} alt="User" />
                <div>
                  <h4>{lecture.title}</h4>
                  <span>{lecture.time}</span>
                </div>
                <button>▶</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
