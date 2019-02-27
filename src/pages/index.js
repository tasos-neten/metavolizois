import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Messenger from "../components/messenger"

const IndexPage = () => (
  <Layout>
    <Messenger />
    <SEO title="Μεταβολή Ζωής - Κέντρο στήριξης εξαρτημένων ατόμων" keywords={[`αρωγή`, `αποτοξίνωση`, `ναρκωτικά`, `κέντρο αποτοξίνωσης`, `ανάρρωση`, `κέντρο στήριξης`]} />
    <div 
      style={{
        lineHeight: `1.5`,
      }}
      className={
        `container`
      }
    >
    <h3>Έχεις στο περιβάλλον σου κάποιον εξαρτημένο;</h3>
    <p>
    Δεν είσαι μόνος/μόνη, είμαστε εδώ για σένα. Περάσαμε τα ίδια γεγονότα που περνάς και εσύ τώρα: θυμώσαμε, κλάψαμε, φωνάξαμε, ουρλιάξαμε αλλά στο τέλος βρήκαμε αυτό που αναζητούσαμε τόσο καιρό. Τον τρόπο να ζήσουμε ειρηνικά, σωστά και υπεύθυνα.
    Έτσι δημιουργήσαμε το κέντρο στήριξης οικογένειας εξαρτημένων ατόμων «ΜΕΤΑΒΟΛΗ ΖΩΗΣ».
    </p>
    <p>
    Τα αδιέξοδα μας υποχρέωσαν να παραδεχθούμε το πρόβλημά μας και να αναζητήσουμε λύσεις. Να επανεξετάσουμε τις απόψεις, τη στάση της ζωής μας και να κάνουμε τη ΜΕΤΑΒΟΛΗ ΖΩΗΣ. Γιατί και εμείς κάποτε μέναμε ακίνητοι και δεν αναζητούσαμε βοήθεια από αυτούς που ήξεραν να μας πληροφορήσουν και να μας βοηθήσουν. Κρυβόμασταν από το περιβάλλον και δεν αλλαζαμε τρόπο συμπεριφοράς στη χρήση του εξαρτημένου και ήμασταν συνεξαρτημένοι με το άτομο που ήταν σε χρήση. Και όντως ένα αρρωστημένο οικογενειακό κλίμα συνεχιζόταν προοδευτικά στην εξαθλίωση. Ο χαμαιλέων αλλάζει χρώματα για να προστατευθεί. Μεταβολή στην ακινησία ανατροπή στην παθητικότητα. Θα κατορθώναμε πολλά περισσότερα πράγματα αν δε θεωρούσαμε πολλά ως ακατόρθωτα.
    </p>
    <p>
    Κάθε φορά που ακούς πώς κάτι είναι ακατόρθωτο γνωρίζεις ότι δεν είναι αλήθεια. Γνώριζε ότι υπάρχει μία δύναμη μεγαλύτερη μέσα σου. Με τη σκέψη ότι η θέληση παράγει μία δύναμη η οποία είναι ικανή από μόνη της να σε εντάξει στην ομάδα των νικητών, δημιουργήσαμε τη «ΜΕΤΑΒΟΛΗ ΖΩΗΣ».
    </p>
    <p>
    Ο ‘βρωμικος άνθρωπος’ έχει δύο επιλογές
    <ul>
      <li>Α. Να πλυθεί και να φύγει η βρωμιά του.</li>
      <li>Β. Να σβήσει το φως και να ψήνεται μέσα βρώμικος.</li> 
    </ul>
    </p>
    <h3>Η δική σου επιλογή;</h3>
    <p>
    Η ανάρρωση ξεκινά από την οικογένεια.
    Η παραδοχή του προβλήματος από τους συνεξαρτημένους είναι το πρώτο βήμα για την αρχή της οικογενειακής ανάρρωσης.
    Η θέληση του εξαρτημένου είναι το επόμενο βήμα για την παράλληλη ανάρρωση όλου του οικογενειακού προβλήματος. Η συνεχής συμμετοχή στις συνεδρίες των οικογενειακών ομάδων και η παράλληλη παρακολούθηση των συνεδριών των εξαρτημένων είναι η σωστή επιλογή και ο δρόμος προς μία καλύτερη και νηφάλια ζωή όλων των εμπλεκομένων. 
    σε αυτήν την κατάσταση.
    </p>
    <p>
    Όταν υπάρχει ένα πρόβλημα δεν είναι τί πρέπει να κάνεις αλλά να μάθεις και να κάνεις. Η άγνοια και η μη αποδοχή του προβλήματος είναι τα δύο κακά που επιτρέπουν τη συνέχεια του προβλήματος.  
    </p>
  
  </div>
  </Layout>
)

export default IndexPage
