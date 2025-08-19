'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Database, Eye, Lock, Users, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Privacy() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Speed Lines Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: '-100px',
              width: '200px',
            }}
            animate={{
              x: ['0px', '120vw'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
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
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Retour</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-800">Politique de Confidentialité</span>
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
                Politique de 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Confidentialité
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
                <Database className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Données Minimales</h3>
                <p className="text-sm text-gray-600">Nous collectons uniquement les données nécessaires au fonctionnement</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                <Lock className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Chiffrement Total</h3>
                <p className="text-sm text-gray-600">Toutes les communications sont chiffrées de bout en bout</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                <Eye className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Transparence</h3>
                <p className="text-sm text-gray-600">Code source ouvert et auditable par tous</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-600 mr-3" />
                  Données Collectées
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>SMS reçus :</strong> L&apos;application accède à vos SMS uniquement pour les transférer vers Gmail. Ces données ne sont jamais stockées sur nos serveurs.</p>
                  <p><strong>Informations de compte Google :</strong> Adresse email et informations de profil basiques pour l&apos;authentification Gmail.</p>
                  <p><strong>Métadonnées techniques :</strong> Version de l&apos;application, modèle d&apos;appareil (pour le support technique uniquement).</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-purple-600 mr-3" />
                  Utilisation des Données
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Transfert de SMS :</strong> Les SMS sont transférés directement de votre appareil vers votre compte Gmail personnel.</p>
                  <p><strong>Authentification :</strong> Vos identifiants Google sont utilisés uniquement pour l&apos;authentification avec les serveurs Gmail de Google.</p>
                  <p><strong>Support technique :</strong> Les informations de diagnostic peuvent être utilisées pour résoudre les problèmes techniques.</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-green-600 mr-3" />
                  Protection des Données
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Chiffrement :</strong> Toutes les communications utilisent le chiffrement TLS/SSL.</p>
                  <p><strong>Stockage local :</strong> Les données sont stockées uniquement sur votre appareil, jamais sur nos serveurs.</p>
                  <p><strong>Authentification OAuth 2.0 :</strong> Utilisation des standards de sécurité Google officiels.</p>
                  <p><strong>Audit de sécurité :</strong> Code source ouvert et auditable.</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Partage des Données
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Aucun partage :</strong> Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers.</p>
                  <p><strong>Google uniquement :</strong> Les données sont transférées uniquement vers votre compte Gmail personnel via les APIs officielles Google.</p>
                  <p><strong>Conformité légale :</strong> Nous pourrions divulguer des informations si requis par la loi.</p>
                </div>
              </motion.section>

              <motion.section 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  Vos Droits
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Accès :</strong> Vous pouvez demander une copie de vos données personnelles.</p>
                  <p><strong>Rectification :</strong> Vous pouvez corriger ou mettre à jour vos informations.</p>
                  <p><strong>Suppression :</strong> Vous pouvez demander la suppression de vos données.</p>
                  <p><strong>Portabilité :</strong> Vous pouvez exporter vos données dans un format lisible.</p>
                  <p><strong>Opposition :</strong> Vous pouvez vous opposer au traitement de vos données.</p>
                </div>
              </motion.section>

              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p className="mb-4">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
                </p>
                <p className="font-semibold">contact@smstomail.app</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}