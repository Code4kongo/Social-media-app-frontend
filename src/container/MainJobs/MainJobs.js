import React from 'react'
import FilterJob from '../../components/FilterJob/FilterJob'
import SingleJob from '../../components/SingleJob/SingleJob'
import TopJob from '../../components/TopJobs/TopJobs'
import MostViewed from '../../components/MostViewd/MostView'


function MainJobs() {
    
    return (

        <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <FilterJob/>
                            <div className="col-lg-6">
                                <div className="main-ws-sec">
                                    <div className="posts-section">
                                        <SingleJob/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3">
                            <div className="right-sidebar">
                                <TopJob/>
                                <MostViewed/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainJobs
