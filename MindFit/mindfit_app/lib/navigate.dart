import 'package:flutter/material.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // MaterialApp é essencial pois ele configura o Navigator para nós.
    return const MaterialApp(
      home: HomeScreen(), // A primeira tela do nosso app
      debugShowCheckedModeBanner: false,
    );
  }
}

// --- TELA 1: A tela principal ---
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Tela Principal (Home)'),
        backgroundColor: Colors.indigo,
      ),
      body: Center(
        child: ElevatedButton(
          // O que acontece quando o botão é pressionado
          onPressed: () {
            // É aqui que a mágica da navegação acontece!
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const DetailsScreen()),
            );
          },
          child: const Text('Ir para a Tela de Detalhes'),
        ),
      ),
    );
  }
}


// --- TELA 2: A tela de detalhes ---
class DetailsScreen extends StatelessWidget {
  const DetailsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Tela de Detalhes'),
        backgroundColor: Colors.deepOrange,
      ),
      body: Center(
        child: ElevatedButton(
          // O botão de voltar usa Navigator.pop
          onPressed: () {
            // Remove esta tela da pilha e volta para a anterior
            Navigator.pop(context);
          },
          style: ElevatedButton.styleFrom(backgroundColor: Colors.grey),
          child: const Text('Voltar para a Home'),
        ),
      ),
    );
  }
}
