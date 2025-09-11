const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">HealthCoach AI</h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              This app provides wellness insights only and does not replace medical advice. 
              Always consult with healthcare professionals for medical decisions.
            </p>
          </div>
          
          <div className="pt-6 border-t">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm text-muted-foreground">
                © 2025 HealthCoach AI. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>As seen on:</span>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">
                    Reddit
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">
                    Fitbit Community
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;