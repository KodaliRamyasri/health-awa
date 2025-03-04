
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Stomach = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-dark">Stomach Health Awareness</h1>
          <p className="text-xl text-gray-600">Understanding and maintaining digestive wellness</p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <img 
            src="data:image/jpeg;base64,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"
            alt="Stomach Health"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <p className="text-lg mb-6">
            Your digestive system breaks down food and liquid into smaller parts so that your body can absorb them to build and nourish cells and provide energy.
            The digestive tract is a series of hollow organs joined in a long, twisting tube from the mouth to the anus.
          </p>
          
          <p className="text-lg mb-6">
            Digestive disorders affect millions of people worldwide and can significantly impact quality of life. Understanding common digestive conditions
            and maintaining good stomach health is essential for overall wellbeing.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Common Digestive Conditions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gastroesophageal Reflux Disease (GERD)</h3>
                <p>A chronic digestive disease where stomach acid flows back into the food pipe, causing heartburn and other symptoms.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Irritable Bowel Syndrome (IBS)</h3>
                <p>A common disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, and diarrhea or constipation.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Peptic Ulcers</h3>
                <p>Open sores that develop on the inside lining of the stomach, upper small intestine, or esophagus.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Inflammatory Bowel Disease (IBD)</h3>
                <p>Includes Crohn's disease and ulcerative colitis, characterized by chronic inflammation of the digestive tract.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Warning Signs of Digestive Problems</h2>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Persistent abdominal pain or discomfort</li>
            <li>Frequent heartburn or acid reflux</li>
            <li>Bloating and gas</li>
            <li>Changes in bowel habits (diarrhea, constipation, or alternating between both)</li>
            <li>Blood in stool</li>
            <li>Unintentional weight loss</li>
            <li>Persistent nausea or vomiting</li>
            <li>Difficulty swallowing</li>
            <li>Fatigue</li>
            <li>Jaundice (yellowing of the skin and eyes)</li>
          </ul>
          
          <div className="bg-yellow-50 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-2 text-yellow-700">When to Seek Medical Attention</h3>
            <p>Contact your healthcare provider if you experience:</p>
            <ul className="space-y-2 mt-2">
              <li>Severe abdominal pain that doesn't go away</li>
              <li>Blood in vomit or stool</li>
              <li>Black, tarry stools</li>
              <li>Uncontrolled vomiting</li>
              <li>Difficulty swallowing or painful swallowing</li>
              <li>Unexplained weight loss</li>
              <li>Persistent symptoms that don't respond to over-the-counter medications</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Maintaining Good Digestive Health</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat a fiber-rich diet including plenty of fruits, vegetables, and whole grains</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Stay hydrated by drinking plenty of water throughout the day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Exercise regularly to promote healthy digestion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat smaller, more frequent meals and avoid overeating</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Limit fatty, fried foods, and spicy foods if they cause discomfort</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Manage stress through relaxation techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Limit alcohol consumption and avoid smoking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Consider probiotics to support healthy gut bacteria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat slowly and chew food thoroughly</span>
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">The Gut-Brain Connection</h2>
          
          <p className="text-lg mb-6">
            Research increasingly shows a strong connection between gut health and brain function, often called the "gut-brain axis." 
            Your digestive system contains millions of neurons and produces many of the same neurotransmitters found in the brain.
          </p>
          
          <p className="text-lg mb-6">
            This connection explains why digestive disorders can affect mood and why psychological factors like stress can affect digestive function.
            Maintaining a healthy gut can positively impact your mental health and overall well-being.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Digestive Health Resources</h2>
          
          <p className="text-lg mb-8">
            If you're experiencing digestive problems, consider speaking with a healthcare provider who specializes in gastroenterology.
            Regular check-ups and screenings can help detect and treat digestive issues early.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-health-green hover:bg-health-blue">
              Find Digestive Health Resources
            </Button>
            <Button variant="outline">
              Learn About Digestive Screenings
            </Button>
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

export default Stomach;
