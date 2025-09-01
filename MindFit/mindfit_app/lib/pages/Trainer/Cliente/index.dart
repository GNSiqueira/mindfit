import 'package:flutter/widgets.dart';

class ClientePage extends StatelessWidget {
  const ClientePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Text(
          "Cliente",
          // Estilo definido diretamente aqui
          style: const TextStyle(
            fontSize: 28,
            fontWeight: FontWeight.bold,
            color: Color(0xFF333333),
          ),
        ),
      ),
    );
  }
}
