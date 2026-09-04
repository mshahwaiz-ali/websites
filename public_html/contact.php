<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);
    exit;
}

function clean_text($value, $max = 5000) {
    $value = trim((string)$value);
    $value = str_replace(["\r", "\0"], '', $value);
    return mb_substr($value, 0, $max);
}

if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['ok' => true, 'message' => 'Thank you. Your enquiry has been sent.']);
    exit;
}

$name = clean_text($_POST['name'] ?? '', 120);
$company = clean_text($_POST['company'] ?? '', 160);
$email_raw = trim($_POST['email'] ?? '');
$email = filter_var($email_raw, FILTER_VALIDATE_EMAIL);
$phone = clean_text($_POST['phone'] ?? '', 60);
$service = clean_text($_POST['service'] ?? '', 80);
$city = clean_text($_POST['city'] ?? '', 120);
$message = clean_text($_POST['message'] ?? '', 5000);

if ($name === '' || !$email || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please provide your name, a valid email address and project details.']);
    exit;
}

$allowed_services = [
    'civil' => 'Civil Works',
    'electrical' => 'Electrical Works',
    'telecom' => 'Telecommunications',
    'it-works' => 'IT Infrastructure & Systems',
    'integration' => 'Systems Integration',
    'hvac' => 'HVAC Services',
    'dg' => 'Diesel Generator & Backup Power',
    'fire' => 'Fire Safety & Alarm',
    'managed' => 'Managed Infrastructure Services',
    'it' => 'Managed IT Services'
];
$service_label = $allowed_services[$service] ?? 'General / Not specified';

$to = 'info@mhs-tech.com.pk';
$subject = 'Website Enquiry — ' . $service_label;
$body = "New website enquiry\n\n" .
        "Name: {$name}\n" .
        "Company: {$company}\n" .
        "Email: {$email}\n" .
        "Phone: {$phone}\n" .
        "Service: {$service_label}\n" .
        "City / Project Location: {$city}\n\n" .
        "Project Details:\n{$message}\n";

$headers = [
    'From: MHS Technologies Website <info@mhs-tech.com.pk>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'The server could not send your enquiry. Please email info@mhs-tech.com.pk directly.']);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Thank you. Your enquiry has been sent to MHS Technologies.']);
