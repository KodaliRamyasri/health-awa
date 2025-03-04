
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-dark">Health Tips & Advice</h1>
          <p className="text-xl text-gray-600">Practical guidance for a healthier lifestyle</p>
        </div>
        
        <Tabs defaultValue="nutrition" className="w-full mb-12">
          <div data-aos="fade-up" className="mb-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
              <TabsTrigger value="mental">Mental Wellbeing</TabsTrigger>
              <TabsTrigger value="sleep">Sleep</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="nutrition">
            <div data-aos="fade-up" className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Healthy Nutrition"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-health-dark">Healthy Eating Habits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Balanced Meals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Aim for a plate that's half vegetables, quarter protein, and quarter whole grains. Include healthy fats and a variety of colors.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Hydration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Drink plenty of water throughout the day. Aim for 8 glasses daily, more if you're active or in hot weather.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Mindful Eating</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Pay attention to hunger cues, eat slowly, and savor your food. Avoid distractions like TV or phones during meals.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Food Groups to Emphasize</h3>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li><strong>Vegetables and Fruits:</strong> Aim for 5+ servings daily, with emphasis on variety and color.</li>
                <li><strong>Whole Grains:</strong> Choose brown rice, whole wheat bread, oats, and quinoa over refined grains.</li>
                <li><strong>Lean Proteins:</strong> Include fish, poultry, beans, nuts, seeds, and limited amounts of lean meats.</li>
                <li><strong>Healthy Fats:</strong> Incorporate avocados, olive oil, nuts, and fatty fish like salmon.</li>
                <li><strong>Dairy or Alternatives:</strong> Choose low-fat or plant-based options for calcium and vitamin D.</li>
              </ul>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-health-dark">Foods to Limit</h3>
                <ul className="space-y-2">
                  <li>Added sugars (sodas, candies, desserts)</li>
                  <li>Processed and ultra-processed foods</li>
                  <li>Refined carbohydrates</li>
                  <li>Excessive sodium (salt)</li>
                  <li>Trans fats and some saturated fats</li>
                  <li>Alcohol (if consumed, do so in moderation)</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="fitness">
            <div data-aos="fade-up" className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fitness"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-health-dark">Physical Activity Guidelines</h2>
              
              <p className="text-lg mb-6">
                Regular physical activity is one of the most important things you can do for your health. It can help control weight, 
                reduce risk of chronic diseases, strengthen bones and muscles, improve mental health, and increase longevity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Weekly Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>150 minutes of moderate-intensity aerobic activity</li>
                      <li>OR 75 minutes of vigorous-intensity activity</li>
                      <li>PLUS muscle-strengthening activities on 2+ days</li>
                      <li>Balance and flexibility exercises are also beneficial</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Types of Exercise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Aerobic:</strong> Walking, running, cycling, swimming</li>
                      <li><strong>Strength:</strong> Weight training, resistance bands, bodyweight exercises</li>
                      <li><strong>Flexibility:</strong> Yoga, stretching routines</li>
                      <li><strong>Balance:</strong> Tai chi, yoga, specific balance exercises</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Getting Started with Exercise</h3>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>Start slowly and gradually increase intensity and duration</li>
                <li>Choose activities you enjoy to increase adherence</li>
                <li>Find an exercise buddy for motivation and accountability</li>
                <li>Set realistic, specific goals</li>
                <li>Schedule workouts as you would appointments</li>
                <li>Mix up your routine to prevent boredom</li>
                <li>Consider working with a fitness professional for guidance</li>
              </ul>
              
              <div className="bg-green-50 p-6 rounded-xl mb-8 border-l-4 border-health-green">
                <h3 className="text-xl font-semibold mb-3 text-health-dark">Everyday Activity Tips</h3>
                <p className="mb-4">Even outside of dedicated workout time, look for opportunities to be more active:</p>
                <ul className="space-y-2">
                  <li>Take the stairs instead of the elevator</li>
                  <li>Park farther away from entrances</li>
                  <li>Walk or cycle for short errands</li>
                  <li>Stand up and move every hour if you have a sedentary job</li>
                  <li>Do active chores like gardening, washing the car, or vigorous housecleaning</li>
                  <li>Walk while talking on the phone</li>
                  <li>Play actively with children or pets</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mental">
            <div data-aos="fade-up" className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Mental Wellbeing"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-health-dark">Mental Wellbeing Strategies</h2>
              
              <p className="text-lg mb-6">
                Mental wellbeing is just as important as physical health. Practicing good mental health habits can help you cope with life's challenges,
                build resilience, and enjoy a more fulfilling life.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Stress Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Practice deep breathing exercises</li>
                      <li>Use progressive muscle relaxation</li>
                      <li>Try meditation or mindfulness</li>
                      <li>Journal about your feelings</li>
                      <li>Listen to calming music</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Social Connection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Nurture close relationships</li>
                      <li>Schedule regular social activities</li>
                      <li>Join clubs or groups with shared interests</li>
                      <li>Volunteer in your community</li>
                      <li>Practice active listening</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Self-Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Set healthy boundaries</li>
                      <li>Make time for hobbies and activities you enjoy</li>
                      <li>Spend time in nature</li>
                      <li>Practice gratitude daily</li>
                      <li>Learn to say no when necessary</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Building Resilience</h3>
              
              <p className="text-lg mb-4">
                Resilience is the ability to adapt to difficult situations and recover from setbacks. Here are strategies to build resilience:
              </p>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>Develop a positive outlook and practice optimistic thinking</li>
                <li>Accept that change is part of life</li>
                <li>Set realistic goals and take decisive actions</li>
                <li>View challenges as opportunities for growth</li>
                <li>Learn from past experiences</li>
                <li>Practice self-compassion</li>
                <li>Maintain perspective during difficult times</li>
              </ul>
              
              <div className="bg-purple-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-health-dark">When to Seek Help</h3>
                <p className="mb-4">It's important to recognize when you might need professional support. Consider seeking help if you experience:</p>
                <ul className="space-y-2">
                  <li>Persistent feelings of sadness or anxiety</li>
                  <li>Significant changes in eating or sleeping patterns</li>
                  <li>Withdrawal from activities you once enjoyed</li>
                  <li>Difficulty functioning in daily life</li>
                  <li>Thoughts of harming yourself or others</li>
                  <li>Substance use to cope with emotions</li>
                </ul>
                <p className="mt-4">Remember: Seeking help is a sign of strength, not weakness.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sleep">
            <div data-aos="fade-up" className="mb-8">
              <img 
                src="data:image/jpeg;base64,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"
                alt="Sleep Health"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-health-dark">Healthy Sleep Habits</h2>
              
              <p className="text-lg mb-6">
                Quality sleep is essential for physical health, mental wellbeing, and daily functioning. Adults typically need 7-9 hours of sleep per night,
                while children and teenagers need even more.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Sleep Hygiene Tips</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Daytime Habits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Maintain a consistent wake-up time, even on weekends</li>
                      <li>Get regular exercise, but not too close to bedtime</li>
                      <li>Get natural sunlight exposure, especially in the morning</li>
                      <li>Limit caffeine in the afternoon and evening</li>
                      <li>Avoid large meals and excessive fluids close to bedtime</li>
                      <li>Manage stress through relaxation techniques</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Bedtime Routine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Establish a relaxing pre-sleep routine</li>
                      <li>Go to bed at the same time each night</li>
                      <li>Limit exposure to screens 1-2 hours before bed</li>
                      <li>Keep your bedroom dark, quiet, and cool (65-68°F/18-20°C)</li>
                      <li>Use your bed only for sleep and intimacy</li>
                      <li>If you can't fall asleep after 20 minutes, get up and do something relaxing</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Common Sleep Disruptors</h3>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li><strong>Electronic devices:</strong> Blue light exposure suppresses melatonin production</li>
                <li><strong>Inconsistent sleep schedule:</strong> Disrupts your body's internal clock</li>
                <li><strong>Alcohol:</strong> May help you fall asleep but reduces sleep quality</li>
                <li><strong>Caffeine:</strong> Can stay in your system for 6+ hours</li>
                <li><strong>Large meals before bed:</strong> Can cause discomfort and acid reflux</li>
                <li><strong>Stress and anxiety:</strong> Racing thoughts can make it difficult to fall asleep</li>
                <li><strong>Physical discomfort:</strong> Pain, allergies, or uncomfortable bedding</li>
              </ul>
              
              <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-health-dark">When to Seek Help for Sleep Issues</h3>
                <p className="mb-4">Consider consulting a healthcare provider if you experience:</p>
                <ul className="space-y-2">
                  <li>Persistent trouble falling or staying asleep</li>
                  <li>Excessive daytime sleepiness despite adequate sleep time</li>
                  <li>Loud snoring, gasping, or stopping breathing during sleep</li>
                  <li>Uncomfortable sensations in your legs at night</li>
                  <li>Sleep problems affecting your daily functioning</li>
                  <li>Reliance on sleep aids for more than a few weeks</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark text-center">Seasonal Health Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-t-lg">
                <CardTitle className="text-xl">Summer Health</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use sunscreen with SPF 30+ and reapply every 2 hours</li>
                  <li>Stay hydrated, especially during outdoor activities</li>
                  <li>Wear lightweight, light-colored clothing</li>
                  <li>Watch for signs of heat exhaustion and heat stroke</li>
                  <li>Be cautious about food safety at outdoor gatherings</li>
                  <li>Protect against insect bites with appropriate repellent</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-t-lg">
                <CardTitle className="text-xl">Winter Health</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Get your annual flu vaccine</li>
                  <li>Wash hands frequently to prevent cold and flu spread</li>
                  <li>Stay active despite colder weather</li>
                  <li>Moisturize skin to prevent dryness</li>
                  <li>Maintain vitamin D levels (consider supplements)</li>
                  <li>Practice winter safety to prevent falls on ice</li>
                  <li>Watch for signs of seasonal affective disorder</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Health Resources</h2>
          
          <p className="text-lg mb-8">
            Looking for more specialized health information? Check out our awareness pages for detailed information on specific health topics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/awareness/mental">
              <Button className="bg-health-green hover:bg-health-blue w-full sm:w-auto">
                Mental Health Resources
              </Button>
            </Link>
            <Link to="/awareness/heart">
              <Button variant="outline" className="w-full sm:w-auto">
                Heart Health Resources
              </Button>
            </Link>
          </div>
        </div>
        
        <div data-aos="fade-up" className="border-t pt-8">
          <p className="text-gray-500 italic text-sm mb-4">
            Disclaimer: This information is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          
          <div className="flex justify-center">
            <Link to="/" className="text-health-blue hover:text-health-green transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
