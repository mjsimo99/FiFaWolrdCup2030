import React, { useState, useEffect } from 'react';
import CountdownCard from 'components/CountdownCard';

function TournamentCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const tournamentDate = new Date('2030-06-10T00:00:00Z');

    const updateCountdown = () => {
        const now = new Date();
        const difference = tournamentDate - now;

        if (difference > 0) {
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            });
        }
    };

    useEffect(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="bg-white py-20 px-32">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    Tournament Countdown
                </h2>
                <p className="text-gray-600 text-lg mb-12">
                    The world's greatest football celebration begins in
                </p>

                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <CountdownCard
                        value={timeLeft.days.toLocaleString()}
                        label="Days"
                        bgColor="bg-[#2664eb]/10"
                        textColor="text-[#2664eb]"
                    />
                    <CountdownCard
                        value={timeLeft.hours.toString().padStart(2, '0')}
                        label="Hours"
                        bgColor="bg-[#9234eb]/10"
                        textColor="text-[#9234eb]"
                    />
                    <CountdownCard
                        value={timeLeft.minutes.toString().padStart(2, '0')}
                        label="Minutes"
                        bgColor="bg-[#db2778]/10"
                        textColor="text-[#db2778]"
                    />
                    <CountdownCard
                        value={timeLeft.seconds.toString().padStart(2, '0')}
                        label="Seconds"
                        bgColor="bg-[#db2525]/10"
                        textColor="text-[#db2525]"
                    />
                </div>
            </div>
        </section>
    );
}

export default TournamentCountdown;
