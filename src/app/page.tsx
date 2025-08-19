import Link from 'next/link';
import { Shield, Smartphone, Mail, ArrowRight, CheckCircle, AlertCircle, Clock, Search, Zap, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">SMS to Mail</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Confidentialité
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
              Conditions
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6 transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <div className="flex space-x-1">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transférez vos SMS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              vers Gmail
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Application Android qui transfère automatiquement vos SMS importants vers votre boîte mail Gmail. 
            Simple, sécurisé et respectueux de votre vie privée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Android 7.0+</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">100% Gratuit</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vous en avez assez de 
            <span className="text-red-600"> perdre vos SMS importants ?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Codes de vérification perdus, messages professionnels noyés, historique inaccessible... 
            SMS to Mail résout tous ces problèmes du quotidien !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
              Problèmes quotidiens
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Codes perdus en urgence</h4>
                  <p className="text-gray-600">Impossible de retrouver le code de vérification reçu il y a 2 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <Search className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Recherche impossible</h4>
                  <p className="text-gray-600">Pas de fonction de recherche avancée dans les SMS natifs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <Smartphone className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Limite de stockage</h4>
                  <p className="text-gray-600">Messages automatiquement supprimés quand la mémoire est pleine</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <Mail className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Pas de sauvegarde</h4>
                  <p className="text-gray-600">Perte définitive des SMS en cas de problème téléphone</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              Solutions SMS to Mail
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                <Zap className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Transfert instantané</h4>
                  <p className="text-gray-600">Tous vos SMS arrivent automatiquement dans Gmail en temps réel</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                <Search className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Recherche puissante</h4>
                  <p className="text-gray-600">Utilisez la recherche Gmail pour retrouver n&apos;importe quel SMS</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                <Shield className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Stockage illimité</h4>
                  <p className="text-gray-600">15 Go de stockage Gmail gratuit, extensible selon vos besoins</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                <Star className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Sauvegarde permanente</h4>
                  <p className="text-gray-600">Vos SMS sont sauvegardés à vie dans le cloud Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Mockups */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interface Simple et 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Intuitive
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Configuration en moins de 2 minutes. Aucune compétence technique requise.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 overflow-hidden">
          {/* Phone Mockup 1 - Setup */}
          <div className="relative">
            <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-between px-6 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                    <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* App content - Setup screen */}
                <div className="p-6 h-full bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-gray-900 mb-2">SMS to Mail</h1>
                    <p className="text-gray-600 text-sm">Configuration rapide</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-700">Permissions accordées</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium">
                      Se connecter à Gmail
                    </button>
                    
                    <div className="text-center text-xs text-gray-500 mt-4">
                      Configuration sécurisée avec Google
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-medium text-gray-700">1. Configuration</span>
            </div>
          </div>

          {/* Phone Mockup 2 - Active */}
          <div className="relative transform scale-110 z-10">
            <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="h-12 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-between px-6 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                    <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* App content - Active screen */}
                <div className="p-6 h-full bg-gradient-to-br from-green-50 to-blue-50">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h1 className="text-lg font-bold text-gray-900 mb-1">Gmail connecté !</h1>
                    <p className="text-gray-600 text-sm">Transfert automatique actif</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">SMS transférés</span>
                        <span className="text-sm text-green-600 font-bold">847</span>
                      </div>
                      <p className="text-xs text-gray-500">Depuis l&apos;installation</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700">En ligne - Surveillance active</span>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm">
                        Voir dans Gmail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 px-4 py-2 rounded-lg shadow-lg border border-green-200">
              <span className="text-sm font-medium text-green-700">2. Actif & Fonctionnel</span>
            </div>
          </div>

          {/* Phone Mockup 3 - Gmail */}
          <div className="relative">
            <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="h-12 bg-red-500 flex items-center justify-between px-6 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                    <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* Gmail content */}
                <div className="h-full bg-white">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">Gmail</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <Smartphone className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">SMS: Code de vérification</span>
                        </div>
                        <p className="text-xs text-gray-600">Votre code: 847392</p>
                        <span className="text-xs text-gray-400">Il y a 2 min</span>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <Smartphone className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">SMS: Livraison confirmée</span>
                        </div>
                        <p className="text-xs text-gray-600">Votre colis sera livré demain</p>
                        <span className="text-xs text-gray-400">Il y a 1 heure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-medium text-gray-700">3. SMS dans Gmail</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Transfert Automatique</h3>
            <p className="text-gray-600">
              Vos SMS sont automatiquement transférés vers Gmail dès réception, sans intervention manuelle.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sécurisé & Privé</h3>
            <p className="text-gray-600">
              Utilise l&apos;authentification Google officielle. Aucune donnée n&apos;est stockée sur nos serveurs.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Intégration Gmail</h3>
            <p className="text-gray-600">
              S&apos;intègre parfaitement avec Gmail grâce aux APIs officielles de Google.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Respect de la Vie Privée</h2>
          <p className="text-lg text-gray-600 mb-8">
            SMS to Mail est conçu avec la confidentialité au cœur. Nous respectons vos données personnelles 
            et suivons strictement les politiques de Google pour les applications utilisant des données sensibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Politique de Confidentialité
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/terms" className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Conditions d&apos;Utilisation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-800">SMS to Mail</span>
          </div>
          <p className="text-gray-600 mb-4">
            Application Android pour transférer vos SMS vers Gmail
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Confidentialité
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Conditions
            </Link>
            <span>© 2024 SMS to Mail</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
