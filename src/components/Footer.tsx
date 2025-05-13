import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d0a12] text-[#f5e9dc] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[#7b2230]">
              À propos
            </h3>
            <p className="text-sm">
              Wine Recommender est un projet visant à aider les amateurs de vin à découvrir de nouvelles références adaptées à leurs goûts.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[#7b2230]">
              Liens rapides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#a03c50] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a03c50] transition-colors">
                  Recherche
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a03c50] transition-colors">
                  Visualisations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[#7b2230]">
              Contact
            </h3>
            <p className="text-sm">
              Pour toute question ou suggestion, n'hésitez pas à nous contacter à :
              <br />
              <a href="mailto:contact@winerecommender.com" className="text-[#a03c50] hover:text-[#f5e9dc] transition-colors">
                contact@winerecommender.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#7b2230] text-center text-sm">
          <p>© 2024 Wine Recommender. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 