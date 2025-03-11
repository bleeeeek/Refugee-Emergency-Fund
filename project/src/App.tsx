import { Heart, FileText } from 'lucide-react';

function App() {
  const currentAmount = 1958;
  const targetAmount = 4000;

  return (
    <div className="min-h-screen bg-[#fff8e7] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-center mb-8 font-['Indie_Flower'] text-[#2d3748]" style={{
          textShadow: '2px 2px 0 #ffd700',
        }}>
          Help a Refugee Family Move to Safety
        </h1>

        {/* Progress Section */}
        <div className="relative mb-12 bg-white rounded-lg p-6 border-4 border-[#2d3748] border-dashed">
          {/* Photo Section */}
          <div className="mb-4">
            <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-lg overflow-hidden" style={{
              boxShadow: '5px 5px 0 #2d3748',
              border: '3px solid #2d3748'
            }}>
              <img 
                src="/images/family-home.jpg"
                alt="Current living conditions"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                <p className="text-white font-['Indie_Flower'] text-center">
                  Current living conditions of the family
                </p>
              </div>
            </div>
          </div>

          {/* Remove Canvas section and directly show Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-['Indie_Flower'] text-xl text-[#2d3748]">Raised: RM {currentAmount}</span>
              <span className="font-['Indie_Flower'] text-xl text-[#2d3748]">Goal: RM {targetAmount}</span>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#4ecdc4]" 
                style={{ width: `${(currentAmount / targetAmount) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://forms.gle/6ysxEHdjuk9UgJwc6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b6b] text-white rounded-lg font-['Indie_Flower'] text-xl transform transition hover:scale-105"
              style={{
                boxShadow: '3px 3px 0 #2d3748',
              }}
            >
              <Heart className="w-5 h-5" />
              Donate Now
              <div className="absolute inset-0 border-2 border-[#2d3748] rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
            </a>
            <a
               href="https://chat.whatsapp.com/DE05OauovRx0Tcms3jbc2M  "
               target="_blank"
               rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#4ecdc4] text-white rounded-lg font-['Indie_Flower'] text-xl transform transition hover:scale-105"
              style={{
                boxShadow: '3px 3px 0 #2d3748',
              }}
            >
              <FileText className="w-5 h-5" />
              Get Updates
              <div className="absolute inset-0 border-2 border-[#2d3748] rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
            </a>
          </div>
        </div>

        {/* Story Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg relative transform rotate-[-1deg]" style={{
            boxShadow: '5px 5px 0 #2d3748',
            border: '3px solid #2d3748'
          }}>
            <h2 className="text-3xl mb-4 font-['Indie_Flower'] text-[#2d3748]">Their Struggle</h2>
            <ul className="space-y-4 font-['Indie_Flower'] text-xl">
              <li className="flex items-start gap-3">
                <span className="text-[#ff6b6b] font-bold">✎</span>
                Mother hospitalized with end-stage kidney failure
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6b6b] font-bold">✎</span>
                Father restricted from stable work, limited to odd jobs
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6b6b] font-bold">✎</span>
                Living in cramped one-bedroom home with poor conditions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6b6b] font-bold">✎</span>
                Daughter struggling to manage household alone
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6b6b] font-bold">✎</span>
                Frequent food poisoning due to unhealthy living conditions
              </li>
            </ul>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#ffd700] rounded-full -z-10"></div>
          </div>

          <div className="bg-white p-6 rounded-lg relative transform rotate-[1deg]" style={{
            boxShadow: '5px 5px 0 #2d3748',
            border: '3px solid #2d3748'
          }}>
            <h2 className="text-3xl mb-4 font-['Indie_Flower'] text-[#2d3748]">Your Impact</h2>
            <div className="space-y-4 font-['Indie_Flower'] text-xl">
              <p>The Quran (Surah At-Tawbah, Ayah 60) guides us to help the poor (Faqeer) and needy (Miskeen). Your donation will provide:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#4ecdc4] font-bold">★</span>
                  Housing deposit and initial rent
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4ecdc4] font-bold">★</span>
                  Utility setup fees
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4ecdc4] font-bold">★</span>
                  Basic necessities and household items
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4ecdc4] font-bold">★</span>
                  Secure, cleaner living environment
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#4ecdc4] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 pb-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="font-['Indie_Flower'] text-[#2d3748]">
            <p className="text-xl mb-2">A Vision of Good Project</p>
            <p className="text-lg">
              Questions? Contact us at{' '}
              <a 
                href="mailto:avisionofgood@gmail.com" 
                className="text-[#4ecdc4] hover:underline"
              >
                avisionofgood@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;