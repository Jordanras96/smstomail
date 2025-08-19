'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Scale, UserCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Terms() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Cyberpunk Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
            style={{ left: `${(i + 1) * 7}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
            style={{ top: `${(i + 1) * 10}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Retour</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-800">Conditions d&apos;Utilisation</span>
            </div>
          </motion.div>
        </nav>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Conditions 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  d&apos;Utilisation
                </span>
              </h1>
              <p className="text-lg text-gray-600">
                Dernière mise à jour : 19 août 2024
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-12"
              variants={fadeInUp}
            >
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                <Zap className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Utilisation Gratuite</h3>
                <p className="text-sm text-gray-600">SMS to Mail est 100% gratuit, sans publicité ni limitation</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                <UserCheck className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Respect Utilisateur</h3>
                <p className="text-sm text-gray-600">Vos droits et votre vie privée sont notre priorité absolue</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                <Scale className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Conformité Légale</h3>
                <p className="text-sm text-gray-600">Respect total du RGPD et des réglementations en vigueur</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  Acceptation des Conditions
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>En utilisant SMS to Mail, vous acceptez pleinement ces conditions d&apos;utilisation. Cette application révolutionnaire transforme votre expérience de gestion des SMS en offrant un transfert automatique, sécurisé et instantané vers Gmail.</p>
                  <p><strong>Pourquoi choisir SMS to Mail ?</strong> Parce que nous croyons que vos données vous appartiennent. Notre engagement : une transparence totale, une sécurité maximale, et une simplicité d&apos;utilisation inégalée.</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-purple-600 mr-3" />
                  Services Fournis
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Transfert automatique ultra-rapide :</strong> Vos SMS sont transférés vers Gmail en temps réel, sans aucun délai. Fini les notifications manquées !</p>
                  <p><strong>Sécurité de niveau bancaire :</strong> Chiffrement de bout en bout avec les protocoles de sécurité Google. Vos données sont plus sécurisées que jamais.</p>
                  <p><strong>Interface intuitive :</strong> Configuration en moins de 2 minutes. Aucune compétence technique requise.</p>
                  <p><strong>Compatibilité universelle :</strong> Fonctionne avec tous les appareils Android 7.0+ et tous les comptes Gmail.</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="h-6 w-6 text-blue-600 mr-3" />
                  Responsabilités de l&apos;Utilisateur
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Utilisation légale et éthique :</strong> Vous vous engagez à utiliser SMS to Mail uniquement pour vos propres SMS et dans le respect de la législation en vigueur.</p>
                  <p><strong>Sécurité de votre compte :</strong> Maintenez la confidentialité de vos identifiants Google. SMS to Mail ne stocke jamais vos mots de passe.</p>
                  <p><strong>Mise à jour recommandée :</strong> Gardez l&apos;application à jour pour bénéficier des dernières améliorations de sécurité et des nouvelles fonctionnalités.</p>
                  <p><strong>Signalement responsable :</strong> Signalez tout problème ou comportement suspect à notre équipe support.</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="h-6 w-6 text-green-600 mr-3" />
                  Propriété Intellectuelle
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Code source ouvert :</strong> SMS to Mail est fier d&apos;être open source. Vous pouvez consulter, auditer et contribuer au code sur GitHub.</p>
                  <p><strong>Transparence totale :</strong> Aucun code caché, aucune collecte de données secrète. Tout est vérifiable et auditable.</p>
                  <p><strong>Marques et logos :</strong> Le nom &quot;SMS to Mail&quot; et les logos associés sont protégés. Utilisation autorisée pour la promotion de l&apos;application.</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
                  Limitations de Responsabilité
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Service &quot;tel quel&quot; :</strong> SMS to Mail est fourni gratuitement et sans garantie. Nous nous efforçons d&apos;offrir le meilleur service possible.</p>
                  <p><strong>Disponibilité du service :</strong> Bien que nous visions une disponibilité de 99.9%, des interruptions peuvent survenir pour maintenance ou cas de force majeure.</p>
                  <p><strong>Limitation des dommages :</strong> Notre responsabilité est limitée au maximum autorisé par la loi applicable.</p>
                  <p><strong>Support communautaire :</strong> Le support est fourni sur la base du volontariat par notre communauté d&apos;utilisateurs et développeurs.</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  Modifications et Résiliation
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Évolution continue :</strong> Ces conditions peuvent évoluer pour améliorer votre expérience. Toute modification importante vous sera notifiée.</p>
                  <p><strong>Liberté totale :</strong> Vous pouvez arrêter d&apos;utiliser SMS to Mail à tout moment, sans frais ni pénalité.</p>
                  <p><strong>Suppression automatique :</strong> En cas de désinstallation, toutes vos données locales sont automatiquement supprimées.</p>
                </div>
              </motion.section>

              <motion.div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold mb-4">Rejoignez la Révolution SMS to Mail</h2>
                <p className="mb-4">
                  Des milliers d&apos;utilisateurs nous font déjà confiance pour sécuriser et simplifier leur gestion des SMS. 
                  Rejoignez cette communauté avant-gardiste qui a choisi l&apos;excellence et la transparence.
                </p>
                <p className="font-semibold text-lg">contact@smstomail.app</p>
                <p className="text-sm opacity-90 mt-2">
                  Support premium • Réponse sous 24h • Communauté active
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}