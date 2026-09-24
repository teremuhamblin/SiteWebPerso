###### DEPLOYMENT_DASHBOARD.md >> markdown 
```text
SiteWebPerso/docs/
```
# 🛡️ Environnements & Statuts
### 📌 Vue d’ensemble des environnements
| Environnement | Branche liée | Statut | Dernier déploiement |
|---------------|--------------|--------|----------------------|
| USER (Production) | main | 🟢 Actif | Auto via GitHub Actions |
| TEST (Pré‑production) | test | 🟡 Actif | Auto via GitHub Actions |
| DEV (Développement) | dev | 🔵 Actif | Auto via GitHub Actions |

### 🚀 Détails des environnements
USER — Production
- Branche : main  
- Déploiement : automatique  
- Usage : version publique du site  
- Workflow : deploy-prod  
- Sécurité : stricte (aucune erreur tolérée)

---

>TEST — Pré‑production
- Branche : test  
- Déploiement : automatique  
- Usage : validation avant mise en production  
- Workflow : deploy-test  
- Sécurité : moyenne (tests, vérifications)

>DEV — Développement
- Branche : dev  
- Déploiement : automatique  
- Usage : développement, expérimentation  
- Workflow : deploy-dev  
- Sécurité : souple (modifications fréquentes)

---

### 📊 Historique des déploiements
>Cette section se met à jour automatiquement via GitHub (onglet Deployments).

- *USER* → dernière mise en production : ✔️ OK
- *TEST* → dernière mise en test : ✔️ OK
- *DEV* → dernière mise en développement : ✔️ OK

### 🧭 Architecture des workflows
```text
Multi-Env Deploy
 ├── build
 ├── deploy-user  → main
 ├── deploy-test  → test
 └── deploy-dev   → dev
```

### 🔐 Sécurité & Intégrité
- Vérification automatique des artefacts  
- Déploiement bloqué si erreur critique  
- Logs GitHub Actions disponibles dans l’onglet Actions

### 📡 Coordination
Pour toute demande de déploiement manuel :  
→ ouvrir une issue GitHub  
→ préciser l’environnement (user, test, dev)  
→ indiquer la branche concernée  
