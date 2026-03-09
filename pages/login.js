// Flow Login Screen - Glassmorphism Design
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) alert(error.message)
    else alert('Controlla la tua email per il link di accesso!')
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] p-6 text-white">
      <div className="w-full max-w-md p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
        {/* Glare Effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 blur-[60px] rounded-full" />
        
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Benvenuto in Flow</h2>
        <p className="text-white/50 mb-8 text-sm text-balance">Gestisci la tua dispensa, riduci gli sprechi, salva il pianeta.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="La tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition"
            required
          />
          <button
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition"
          >
            {loading ? 'Caricamento...' : 'Entra in Flow'}
          </button>
        </form>
      </div>
    </div>
  )
}
